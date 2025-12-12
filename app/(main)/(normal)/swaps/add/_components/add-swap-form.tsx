"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { createSwapAction } from "../actions";
import { useActionState } from "react";

interface IAddSwapFormProps {
  currentUser: any;
  targetUser: any;
  targetUserId: string;
}

export default function AddSwapForm({ currentUser, targetUser, targetUserId }: IAddSwapFormProps) {
  const router = useRouter();

  // Form state
  const [state, action, pending] = useActionState(createSwapAction, undefined);

  // Handle successful form submission
  useEffect(() => {
    if (state?.success) {
      toast.success(state.message || "Swap request sent successfully!");
      // Redirect back to the target user's profile after a short delay
      setTimeout(() => {
        router.push(`/profile/${targetUser?.id || targetUser?.name}`);
      }, 1500);
    } else if (state?.success === false && state.message) {
      toast.error(state.message);
    }
  }, [state, router, targetUser]);

  return (
    <section className="max-w-2xl mx-auto">
      {/* Header */}
      <header className="flex items-center gap-4 mb-8">
        <Link
          href={`/profile/${targetUser?.id || targetUser?.name}`}
          className="p-2 rounded-lg hover:bg-app-150 transition-colors"
        >
          <ArrowLeftIcon className="size-6 text-app-400" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-app-500">Create Swap Request</h1>
          <p className="text-app-300">Request a skill exchange with {targetUser?.name}</p>
        </div>
      </header>

      {/* Swap Form */}
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

        <form action={action} className="space-y-6">
          {/* Requester Info */}
          <div className="bg-app-150/30 rounded-lg p-4 border border-app-300/10">
            <h3 className="text-app-400 font-semibold mb-2">From: You</h3>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-app-200 rounded-full flex items-center justify-center text-app-500 font-medium">
                {currentUser?.name?.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="text-app-400 font-medium">{currentUser?.name}</p>
                <p className="text-sm text-app-300">Score: {currentUser?.score}/5.0 ⭐</p>
              </div>
            </div>
          </div>

          {/* Target User Info */}
          <div className="bg-app-150/30 rounded-lg p-4 border border-app-300/10">
            <h3 className="text-app-400 font-semibold mb-2">To: {targetUser?.name}</h3>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-app-200 rounded-full flex items-center justify-center text-app-500 font-medium">
                {targetUser?.name?.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="text-app-400 font-medium">{targetUser?.name}</p>
                <p className="text-sm text-app-300">Score: {targetUser?.score}/5.0 ⭐</p>
              </div>
            </div>
          </div>

          {/* Offering Skill */}
          <div>
            <label htmlFor="offering-skill" className="block text-sm font-medium text-app-400 mb-2">
              Skill You're Offering *
            </label>
            <select
              id="offering-skill"
              name="offering-skill"
              required
              className={`w-full px-4 py-3 rounded-lg bg-app-150 border focus:outline-none focus:ring-2 focus:border-transparent ${
                state?.errors?.['offering-skill']
                  ? 'border-red-500/50 focus:ring-red-500/20'
                  : 'border-app-300/20 focus:ring-app-200'
              }`}
            >
              <option value="">Select a skill you have...</option>
              {currentUser?.skills?.map((skill: any) => (
                <option key={skill.id} value={skill.id}>
                  {skill.name} - {skill.category}
                </option>
              ))}
            </select>
            {state?.errors?.['offering-skill'] && (
              <p className="text-red-400 text-sm mt-1">
                {state.errors['offering-skill'][0]}
              </p>
            )}
          </div>

          {/* Requesting Skill */}
          <div>
            <label htmlFor="requesting-skill" className="block text-sm font-medium text-app-400 mb-2">
              Skill You Want to Learn
            </label>
            <select
              id="requesting-skill"
              name="requesting-skill"
              className={`w-full px-4 py-3 rounded-lg bg-app-150 border focus:outline-none focus:ring-2 focus:border-transparent ${
                state?.errors?.['requesting-skill']
                  ? 'border-red-500/50 focus:ring-red-500/20'
                  : 'border-app-300/20 focus:ring-app-200'
              }`}
            >
              <option value="">Select a skill you want to learn (optional)...</option>
              {targetUser?.skills?.map((skill: any) => (
                <option key={skill.id} value={skill.id}>
                  {skill.name} - {skill.category}
                </option>
              ))}
            </select>
            {state?.errors?.['requesting-skill'] && (
              <p className="text-red-400 text-sm mt-1">
                {state.errors['requesting-skill'][0]}
              </p>
            )}
            <p className="text-xs text-app-300 mt-1">
              Optional: Specify which of their skills you'd like to learn
            </p>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-app-400 mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              placeholder="Describe what you're looking for in this skill exchange..."
              className={`w-full px-4 py-3 rounded-lg bg-app-150 border focus:outline-none focus:ring-2 focus:border-transparent resize-none ${
                state?.errors?.description
                  ? 'border-red-500/50 focus:ring-red-500/20'
                  : 'border-app-300/20 focus:ring-app-200'
              }`}
            />
            {state?.errors?.description && (
              <p className="text-red-400 text-sm mt-1">
                {state.errors.description[0]}
              </p>
            )}
            <p className="text-xs text-app-300 mt-1">
              Explain your goals and what you hope to achieve from this exchange.
            </p>
          </div>

          {/* Hidden inputs for user IDs */}
          <input type="hidden" name="requester-id" value={currentUser?.id} />
          <input type="hidden" name="target-user-id" value={targetUser?.id} />

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t border-app-300/10">
            <Link
              href={`/profile/${targetUser?.id || targetUser?.name}`}
              className="flex-1 px-4 py-3 text-center rounded-lg border border-app-300/20 text-app-300 hover:bg-app-150 transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={pending}
              className="flex-1 px-4 py-3 rounded-lg bg-app-200 text-app-500 font-medium hover:bg-app-200/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {pending ? "Sending Request..." : "Send Swap Request"}
            </button>
          </div>
        </form>
      </div>

      {/* Info Section */}
      <div className="mt-6 bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
        <h4 className="font-medium text-blue-400 mb-2">How Skill Swaps Work</h4>
        <ul className="text-sm text-blue-300 space-y-1">
          <li>• Choose a skill you can teach and optionally request one you want to learn</li>
          <li>• The other person will receive your request and can accept or decline</li>
          <li>• Once accepted, coordinate your exchange through chat</li>
          <li>• Mark the swap as complete when finished</li>
        </ul>
      </div>
    </section>
  );
}