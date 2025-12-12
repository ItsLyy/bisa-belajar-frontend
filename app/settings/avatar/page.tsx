/**
 * Components
 */
import { ArrowLeftIcon, UserCircleIcon, CameraIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

/**
 * Utils
 */
import { getMe } from "@/app/_datas/auth/get-me";

/**
 * Types
 */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Change Avatar",
  description: "Update your profile picture"
};

export default async function AvatarSettingsPage() {
  const user = await getMe();

  return (
    <section className="max-w-2xl mx-auto">
      {/* Header */}
      <header className="flex items-center gap-4 mb-8">
        <Link
          href="/profile"
          className="p-2 rounded-lg hover:bg-app-150 transition-colors"
        >
          <ArrowLeftIcon className="size-6 text-app-400" />
        </Link>
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-full bg-app-200/20 border border-app-200/30">
            <UserCircleIcon className="size-6 text-app-200" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-app-500">Change Avatar</h1>
            <p className="text-app-300">Update your profile picture</p>
          </div>
        </div>
      </header>

      {/* Current Avatar */}
      <div className="bg-app-100/30 rounded-xl border border-app-300/10 p-6 mb-6">
        <h3 className="text-lg font-semibold text-app-400 mb-4">Current Avatar</h3>
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-app-150 border-4 border-app-200/20 overflow-hidden flex items-center justify-center">
              {user?.avatar_path ? (
                <img
                  src={user.avatar_path}
                  alt="Current avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <UserCircleIcon className="size-16 text-app-300" />
              )}
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-app-200 rounded-full flex items-center justify-center border-4 border-app-100">
              <CameraIcon className="size-4 text-app-500" />
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-app-300 mt-4">
          {user?.avatar_path ? "This is your current profile picture" : "No avatar set"}
        </p>
      </div>

      {/* Upload New Avatar */}
      <div className="bg-app-100/30 rounded-xl border border-app-300/10 p-6">
        <h3 className="text-lg font-semibold text-app-400 mb-4">Upload New Avatar</h3>

        <form className="space-y-6">
          {/* File Upload */}
          <div>
            <label htmlFor="avatar" className="block text-sm font-medium text-app-400 mb-2">
              Choose Image
            </label>
            <div className="border-2 border-dashed border-app-300/30 rounded-lg p-8 text-center hover:border-app-200/50 transition-colors">
              <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/*"
                className="hidden"
              />
              <label htmlFor="avatar" className="cursor-pointer">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-app-150 rounded-full flex items-center justify-center">
                    <CameraIcon className="size-8 text-app-400" />
                  </div>
                  <div>
                    <p className="text-app-400 font-medium">Click to upload or drag and drop</p>
                    <p className="text-sm text-app-300">PNG, JPG, GIF up to 5MB</p>
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* Image Requirements */}
          <div className="bg-app-150/30 rounded-lg p-4 border border-app-300/10">
            <h4 className="font-medium text-app-400 mb-2">Image Requirements:</h4>
            <ul className="text-sm text-app-300 space-y-1">
              <li>• Square images work best (1:1 aspect ratio)</li>
              <li>• Minimum size: 200x200 pixels</li>
              <li>• Maximum file size: 5MB</li>
              <li>• Supported formats: PNG, JPG, GIF</li>
            </ul>
          </div>

          {/* Preview Area */}
          <div id="preview" className="hidden">
            <h4 className="font-medium text-app-400 mb-2">Preview</h4>
            <div className="flex justify-center">
              <div className="w-24 h-24 rounded-full bg-app-150 border-2 border-app-200/20 overflow-hidden flex items-center justify-center">
                <UserCircleIcon className="size-12 text-app-300" />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t border-app-300/10">
            <Link
              href="/profile"
              className="flex-1 px-4 py-3 text-center rounded-lg border border-app-300/20 text-app-300 hover:bg-app-150 transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="flex-1 px-4 py-3 rounded-lg bg-app-200 text-app-500 font-medium hover:bg-app-200/80 transition-colors"
            >
              Update Avatar
            </button>
          </div>
        </form>
      </div>

      {/* Avatar Tips */}
      <div className="mt-6 bg-app-150/30 rounded-xl border border-app-300/10 p-4">
        <h4 className="font-medium text-app-400 mb-2">Tips for a great profile picture:</h4>
        <ul className="text-sm text-app-300 space-y-1">
          <li>• Use a clear, well-lit photo</li>
          <li>• Smile and look approachable</li>
          <li>• Dress professionally if you want to appear serious</li>
          <li>• Keep it simple with a plain background</li>
        </ul>
      </div>
    </section>
  );
}