/**
 * Components
 */
import { ArrowLeftIcon, InfoIcon } from "@phosphor-icons/react/dist/ssr";
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
  title: "Edit Bio",
  description: "Update your personal bio information"
};

export default async function BioSettingsPage() {
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
            <InfoIcon className="size-6 text-app-200" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-app-500">Edit Bio</h1>
            <p className="text-app-300">Tell others about yourself</p>
          </div>
        </div>
      </header>

      {/* Bio Form */}
      <div className="bg-app-100/30 rounded-xl border border-app-300/10 p-6">
        <form className="space-y-6">
          <div>
            <label htmlFor="bio" className="block text-sm font-medium text-app-400 mb-2">
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              rows={4}
              defaultValue={user?.bio || ""}
              placeholder="Write something about yourself..."
              className="w-full px-4 py-3 rounded-lg bg-app-150 border border-app-300/20 focus:outline-none focus:ring-2 focus:ring-app-200 focus:border-transparent resize-none"
            />
            <p className="text-xs text-app-300 mt-2">
              Share your interests, background, or what you're looking to learn/exchange skills for.
            </p>
          </div>

          {/* Character Count */}
          <div className="text-right">
            <span className="text-xs text-app-300">
              {user?.bio?.length || 0}/500 characters
            </span>
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
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}