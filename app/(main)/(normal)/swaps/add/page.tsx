/**
 * Utils
 */
import { getMe } from "@/app/_datas/auth/get-me";
import { getUser } from "@/app/_datas/users/get-user";

/**
 * Components
 */
import AddSwapForm from "./_components/add-swap-form";

/**
 * Types
 */
import type { Metadata } from "next";

interface IAddSwapPageProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ searchParams }: IAddSwapPageProps): Promise<Metadata> {
    const params = await searchParams;
    const targetUser = params.target ? await getUser(params.target as string) : null;

    return {
        title: targetUser ? `Create Swap with ${targetUser.name}` : "Create Swap Request",
        description: targetUser ? `Request a skill exchange with ${targetUser.name}` : "Create a new skill swap request"
    };
}

export default async function AddSwapPage({ searchParams }: IAddSwapPageProps) {
  const params = await searchParams;
  const targetUserId = params.target as string;

  const currentUser = await getMe();
  const targetUser = targetUserId ? await getUser(targetUserId) : null;

  if (!currentUser) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h1 className="text-2xl text-app-500 font-bold mb-2">Authentication Required</h1>
          <p className="text-app-300">Please log in to create swap requests.</p>
        </div>
      </div>
    );
  }

  if (!targetUser) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h1 className="text-2xl text-app-500 font-bold mb-2">User Not Found</h1>
          <p className="text-app-300">The user you're trying to swap with doesn't exist.</p>
        </div>
      </div>
    );
  }

  // Don't allow swapping with yourself
  if (currentUser.id === targetUser.id) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h1 className="text-2xl text-app-500 font-bold mb-2">Cannot Swap With Yourself</h1>
          <p className="text-app-300">You cannot create a swap request with yourself.</p>
        </div>
      </div>
    );
  }

  return <AddSwapForm currentUser={currentUser} targetUser={targetUser} targetUserId={targetUserId} />;
}