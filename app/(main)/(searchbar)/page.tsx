/**
 * Components
 */
import { PlusIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

import PostSection from "./_components/home/post-section";
import SwapRequestSection from "./_components/home/swap-request-section";

export default function Home() {
  return (
    <>
      <SwapRequestSection />
      <PostSection />

      {/* Floating Action Button */}
      <Link
        href="/posts/add"
        className="fixed bottom-6 right-6 w-14 h-14 bg-app-200 text-app-500 rounded-full flex items-center justify-center shadow-lg hover:bg-app-200/80 transition-colors z-50"
        title="Create New Post"
      >
        <PlusIcon className="size-6" weight="bold" />
      </Link>
    </>
  );
}
