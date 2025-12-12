/**
 * Components
 */
import { ArrowLeftIcon, UserFocusIcon, XIcon } from "@phosphor-icons/react/dist/ssr";
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
  title: "Edit Skills",
  description: "Manage your skills and expertise"
};

export default async function SkillsSettingsPage() {
  const user = await getMe();

  // Mock skills data - in real app this would come from user data
  const userSkills = user?.skills || [];

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
            <UserFocusIcon className="size-6 text-app-200" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-app-500">Edit Skills</h1>
            <p className="text-app-300">Manage your skills and expertise</p>
          </div>
        </div>
      </header>

      {/* Current Skills */}
      <div className="bg-app-100/30 rounded-xl border border-app-300/10 p-6 mb-6">
        <h3 className="text-lg font-semibold text-app-400 mb-4">Your Skills</h3>

        {userSkills.length > 0 ? (
          <div className="flex flex-wrap gap-2 mb-4">
            {userSkills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-2 bg-app-200/20 border border-app-200/30 rounded-lg text-app-200 text-sm"
              >
                <span>{skill.name}</span>
                <button
                  type="button"
                  className="hover:bg-app-200/30 rounded-full p-1 transition-colors"
                  title={`Remove ${skill.name}`}
                >
                  <XIcon className="size-3" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-app-300 mb-4">No skills added yet.</p>
        )}

        <p className="text-xs text-app-300">
          Click on skill tags to remove them from your profile.
        </p>
      </div>

      {/* Add Skills Form */}
      <div className="bg-app-100/30 rounded-xl border border-app-300/10 p-6">
        <h3 className="text-lg font-semibold text-app-400 mb-4">Add New Skills</h3>

        <form className="space-y-4">
          <div>
            <label htmlFor="skill" className="block text-sm font-medium text-app-400 mb-2">
              Skill Name
            </label>
            <input
              type="text"
              id="skill"
              name="skill"
              placeholder="e.g., React, Python, UI/UX Design"
              className="w-full px-4 py-3 rounded-lg bg-app-150 border border-app-300/20 focus:outline-none focus:ring-2 focus:ring-app-200 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-app-400 mb-2">
              Category
            </label>
            <select
              id="category"
              name="category"
              className="w-full px-4 py-3 rounded-lg bg-app-150 border border-app-300/20 focus:outline-none focus:ring-2 focus:ring-app-200 focus:border-transparent"
            >
              <option value="">Select a category</option>
              <option value="frontend">Frontend Development</option>
              <option value="backend">Backend Development</option>
              <option value="mobile">Mobile Development</option>
              <option value="design">Design</option>
              <option value="devops">DevOps</option>
              <option value="data">Data Science</option>
              <option value="other">Other</option>
            </select>
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
              Add Skill
            </button>
          </div>
        </form>
      </div>

      {/* Popular Skills Suggestions */}
      <div className="mt-6 bg-app-100/30 rounded-xl border border-app-300/10 p-6">
        <h3 className="text-lg font-semibold text-app-400 mb-4">Popular Skills</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "React", "JavaScript", "Python", "Java", "Node.js", "TypeScript",
            "UI/UX Design", "Figma", "Adobe XD", "Photoshop", "SQL", "MongoDB"
          ].map((skill) => (
            <button
              key={skill}
              type="button"
              className="px-3 py-2 bg-app-150 border border-app-300/20 rounded-lg text-app-300 hover:bg-app-200/20 hover:text-app-200 hover:border-app-200/30 transition-colors text-sm"
            >
              + {skill}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}