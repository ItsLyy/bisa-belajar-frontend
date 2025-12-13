"use client";

import { useSearchParams } from 'next/navigation';

export default function RedirectMessage() {
  const searchParams = useSearchParams();
  const hasRedirect = searchParams.has('redirect');

  if (!hasRedirect) return null;

  return (
    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
      <p className="text-yellow-400 text-sm">
        You need to log in to access that page. Please sign in below.
      </p>
    </div>
  );
}