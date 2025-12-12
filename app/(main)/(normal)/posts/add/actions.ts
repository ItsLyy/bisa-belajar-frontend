"use server";

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

// Zod schema for post creation validation
const createPostSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title must be less than 200 characters'),
  content: z.string().min(10, 'Content must be at least 10 characters').max(5000, 'Content must be less than 5000 characters'),
  'course-id': z.string().optional(),
  'user-id': z.string().min(1, 'User ID is required'),
});

// Type inference from Zod schema
type CreatePostData = z.infer<typeof createPostSchema>;

export async function createPostAction(prevState: any, formData: FormData) {
  try {
    // Extract form data
    const rawData = {
      title: formData.get('title') as string,
      content: formData.get('content') as string,
      'course-id': formData.get('course') as string,
      'user-id': formData.get('user-id') as string,
    };

    // Handle file upload if present
    const imageFile = formData.get('image') as File;

    if (imageFile && imageFile.size > 0) {
      // Validate file size (5MB limit)
      if (imageFile.size > 5 * 1024 * 1024) {
        return {
          success: false,
          errors: {
            image: ['Image file size must be less than 5MB'],
          },
          message: 'File too large',
        };
      }

      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
      if (!allowedTypes.includes(imageFile.type)) {
        return {
          success: false,
          errors: {
            image: ['Only JPEG, PNG, and GIF images are allowed'],
          },
          message: 'Invalid file type',
        };
      }
    }

    // Validate data with Zod
    const validationResult = createPostSchema.safeParse(rawData);

    if (!validationResult.success) {
      return {
        success: false,
        errors: validationResult.error.flatten().fieldErrors,
        message: 'Please fix the errors below',
      };
    }

    const validatedData = validationResult.data;

    // Get access token
    const accessToken = (await cookies()).get('access-token')?.value;

    if (!accessToken) {
      return {
        success: false,
        errors: {},
        message: 'Authentication required. Please log in again.',
      };
    }

    let response: Response;

    // Handle file upload differently from JSON
    if (imageFile && imageFile.size > 0) {
      // Use FormData for file uploads
      const formData = new FormData();

      // Add text fields
      formData.append('title', validatedData.title);
      formData.append('content', validatedData.content);
      formData.append('user_id', validatedData['user-id']);

      // Add optional course ID
      if (validatedData['course-id'] && validatedData['course-id'] !== '') {
        formData.append('course_id', validatedData['course-id']);
      }

      // Add the image file
      formData.append('image', imageFile);

      // Make API call with FormData
      response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/posts`, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
          // Don't set Content-Type for FormData - let browser set it with boundary
        },
        body: formData,
      });

      console.log('Creating post with image:', {
        title: validatedData.title,
        hasImage: true,
        imageSize: imageFile.size,
        imageType: imageFile.type
      });
    } else {
      // Use JSON for text-only posts
      const apiPayload = {
        title: validatedData.title,
        content: validatedData.content,
        user_id: parseInt(validatedData['user-id']),
        ...(validatedData['course-id'] && validatedData['course-id'] !== '' && {
          course_id: validatedData['course-id']
        }),
      };

      response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify(apiPayload),
      });

      console.log('Creating post:', apiPayload);
    }

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Failed to create post: ${response.status}`);
    }

    const result = await response.json();

    // Revalidate the home page to show the new post
    revalidatePath('/');
    revalidatePath('/posts');

    return {
      success: true,
      data: result,
      message: 'Post created successfully!',
    };

  } catch (error) {
    console.error('Error creating post:', error);

    return {
      success: false,
      errors: {},
      message: error instanceof Error ? error.message : 'Failed to create post. Please try again.',
    };
  }
}