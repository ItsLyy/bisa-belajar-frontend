"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ArrowLeftIcon, ImageIcon, XIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { createPostAction } from "../actions";

interface IAddPostFormProps {
  user: any;
  courses: any[];
}

export default function AddPostForm({ user, courses }: IAddPostFormProps) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form state
  const [state, action, pending] = useActionState(createPostAction, undefined);

  // Image state
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Handle successful form submission
  useEffect(() => {
    if (state?.success) {
      toast.success(state.message || "Post created successfully!");
      // Redirect to home page after a short delay
      setTimeout(() => {
        router.push('/');
      }, 1500);
    } else if (state?.success === false && state.message) {
      toast.error(state.message);
    }
  }, [state, router]);

  // Handle image selection
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      setSelectedImage(null);
      setImagePreview(null);
      return;
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      toast.error('Please select a valid image file (JPEG, PNG, or GIF)');
      event.target.value = '';
      return;
    }

    // Validate file size (5MB limit)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      toast.error('Image file size must be less than 5MB');
      event.target.value = '';
      return;
    }

    setSelectedImage(file);

    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  // Handle image removal
  const handleRemoveImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Handle form submission with file
  const handleFormSubmit = async (formData: FormData) => {
    // Add the selected image to the form data if it exists
    if (selectedImage) {
      formData.set('image', selectedImage);
    } else {
      // Remove any existing image field if no image is selected
      formData.delete('image');
    }

    // Call the server action
    await action(formData);
  };

  return (
    <section className="max-w-2xl mx-auto pb-24">
      {/* Header */}
      <header className="flex items-center gap-4 mb-8">
        <Link
          href="/"
          className="p-2 rounded-lg hover:bg-app-150 transition-colors"
        >
          <ArrowLeftIcon className="size-6 text-app-400" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-app-500">Create New Post</h1>
          <p className="text-app-300">Share your knowledge with the community</p>
        </div>
      </header>

      {/* Post Form */}
      <div className="bg-app-100/30 rounded-xl border border-app-300/10 p-6">
        {/* Display success/error messages */}
        {state?.message && (
          <div className={`mb-6 p-4 rounded-lg border ${
            state.success
              ? 'bg-green-500/10 border-green-500/20 text-green-400'
              : 'bg-red-500/10 border-red-500/20 text-red-400'
          }`}>
            {state.message}
          </div>
        )}

        <form action={handleFormSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-app-400 mb-2">
              Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              placeholder="What's your post about?"
              className={`w-full px-4 py-3 rounded-lg bg-app-150 border focus:outline-none focus:ring-2 focus:border-transparent ${
                state?.errors && 'title' in state.errors && state.errors.title
                  ? 'border-red-500/50 focus:ring-red-500/20'
                  : 'border-app-300/20 focus:ring-app-200'
              }`}
            />
            {state?.errors && 'title' in state.errors && state.errors.title && (
              <p className="text-red-400 text-sm mt-1">
                {state.errors.title[0]}
              </p>
            )}
          </div>

          {/* Content */}
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-app-400 mb-2">
              Content *
            </label>
            <textarea
              id="content"
              name="content"
              required
              rows={6}
              placeholder="Share your thoughts, experiences, or ask for help..."
              className={`w-full px-4 py-3 rounded-lg bg-app-150 border focus:outline-none focus:ring-2 focus:border-transparent resize-none ${
                state?.errors && 'content' in state.errors && state.errors.content
                  ? 'border-red-500/50 focus:ring-red-500/20'
                  : 'border-app-300/20 focus:ring-app-200'
              }`}
            />
            {state?.errors && 'content' in state.errors && state.errors.content && (
              <p className="text-red-400 text-sm mt-1">
                {state.errors.content[0]}
              </p>
            )}
            <p className="text-xs text-app-300 mt-1">
              Be specific and helpful. Include code snippets, examples, or questions.
            </p>
          </div>

          {/* Course Reference (Optional) */}
          <div>
            <label htmlFor="course" className="block text-sm font-medium text-app-400 mb-2">
              Related Course (Optional)
            </label>
            <select
              id="course"
              name="course"
              className="w-full px-4 py-3 rounded-lg bg-app-150 border border-app-300/20 focus:outline-none focus:ring-2 focus:ring-app-200 focus:border-transparent"
            >
              <option value="">Select a related course (optional)...</option>
              {courses.map((course: any) => (
                <option key={course.id} value={course.id}>
                  {course.title}
                </option>
              ))}
            </select>
            <p className="text-xs text-app-300 mt-1">
              Link your post to a specific course if it's related to that topic.
            </p>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-app-400 mb-2">
              Add Image (Optional)
            </label>

            {imagePreview ? (
              // Image Preview
              <div className="relative">
                <div className="rounded-lg overflow-hidden border border-app-300/20">
                  <img
                    src={imagePreview}
                    alt="Selected image"
                    className="w-full max-w-md h-auto max-h-64 object-contain"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="absolute top-2 right-2 w-8 h-8 bg-red-500/80 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
                  title="Remove image"
                >
                  <XIcon className="size-4 text-white" />
                </button>
                <p className="text-xs text-app-300 mt-2">
                  Image selected: {selectedImage?.name} ({(selectedImage?.size || 0) / 1024 / 1024}MB)
                </p>
              </div>
            ) : (
              // Upload Area
              <div className="border-2 border-dashed border-app-300/30 rounded-lg p-6 text-center hover:border-app-200/50 transition-colors">
                <input
                  ref={fileInputRef}
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <label htmlFor="image" className="cursor-pointer">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 bg-app-150 rounded-full flex items-center justify-center">
                      <ImageIcon className="size-6 text-app-400" />
                    </div>
                    <div>
                      <p className="text-app-400 font-medium">Click to add an image</p>
                      <p className="text-sm text-app-300">PNG, JPG, GIF up to 5MB</p>
                    </div>
                  </div>
                </label>
              </div>
            )}

            {state?.errors && 'image' in state.errors && state.errors.image && (
              <p className="text-red-400 text-sm mt-1">
                {state.errors.image[0]}
              </p>
            )}
          </div>

          {/* Hidden user ID */}
          <input type="hidden" name="user-id" value={user.id} />

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t border-app-300/10">
            <Link
              href="/"
              className="flex-1 px-4 py-3 text-center rounded-lg border border-app-300/20 text-app-300 hover:bg-app-150 transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={pending}
              className="flex-1 px-4 py-3 rounded-lg bg-app-200 text-app-500 font-medium hover:bg-app-200/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {pending ? "Publishing..." : "Publish Post"}
            </button>
          </div>
        </form>
      </div>

      {/* Guidelines */}
      <div className="mt-6 bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
        <h4 className="font-medium text-blue-400 mb-2">Posting Guidelines</h4>
        <ul className="text-sm text-blue-300 space-y-1">
          <li>• Be respectful and constructive in your posts</li>
          <li>• Use clear titles that describe your content</li>
          <li>• Include relevant details and context</li>
          <li>• Tag related courses when applicable</li>
          <li>• Respect community guidelines and terms of service</li>
        </ul>
      </div>
    </section>
  );
}