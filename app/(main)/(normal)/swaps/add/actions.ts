"use server";

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

// Zod schema for swap creation validation
const createSwapSchema = z.object({
  'requester-id': z.string().min(1, 'Requester ID is required'),
  'target-user-id': z.string().min(1, 'Target user ID is required'),
  'offering-skill': z.string().min(1, 'Offering skill is required'),
  'requesting-skill': z.string().optional(),
  'description': z.string().max(1000, 'Description must be less than 1000 characters').optional(),
});

// Type inference from Zod schema
type CreateSwapData = z.infer<typeof createSwapSchema>;

export async function createSwapAction(prevState: any, formData: FormData) {
  try {
    // Extract form data
    const rawData = {
      'requester-id': formData.get('requester-id') as string,
      'target-user-id': formData.get('target-user-id') as string,
      'offering-skill': formData.get('offering-skill') as string,
      'requesting-skill': formData.get('requesting-skill') as string,
      'description': formData.get('description') as string,
    };

    // Validate data with Zod
    const validationResult = createSwapSchema.safeParse(rawData);

    if (!validationResult.success) {
      return {
        success: false,
        errors: validationResult.error.flatten().fieldErrors,
        message: 'Please fix the errors below',
      };
    }

    const validatedData = validationResult.data;

    // Check if requester and target are the same
    if (validatedData['requester-id'] === validatedData['target-user-id']) {
      return {
        success: false,
        errors: {
          'target-user-id': ['You cannot create a swap request with yourself'],
        },
        message: 'Invalid swap request',
      };
    }

    // Prepare API payload
    const apiPayload = {
      requester_id: parseInt(validatedData['requester-id']),
      target_user_id: parseInt(validatedData['target-user-id']),
      requester_skill_id: validatedData['offering-skill'],
      requested_skill_id: validatedData['requesting-skill'] || null,
      description: validatedData['description'] || null,
    };

    const accessToken = (await cookies()).get('access-token')?.value;

    // Make API call to create swap
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/swaps`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: "application/json",
        Authorization: `Bearer ${accessToken}`
        // Note: Authorization header should be handled by the API route or middleware
      },
      body: JSON.stringify(apiPayload),
    });

    console.log(apiPayload)
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Failed to create swap: ${response.status}`);
    }

    const result = await response.json();

    // Revalidate the profile page to show updated swap status
    revalidatePath(`/profile/${validatedData['target-user-id']}`);
    revalidatePath('/'); // Also revalidate home page if it shows swap data

    return {
      success: true,
      data: result,
      message: 'Swap request sent successfully!',
    };

  } catch (error) {
    console.error('Error creating swap:', error);

    return {
      success: false,
      errors: {},
      message: error instanceof Error ? error.message : 'Failed to create swap request. Please try again.',
    };
  }
}