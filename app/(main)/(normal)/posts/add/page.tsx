/**
 * Utils
 */
import { getMe } from "@/app/_datas/auth/get-me";
import { getAllDiscoveryCourses } from "@/app/_datas/courses/get-all-courses";

/**
 * Components
 */
import AddPostForm from "./_components/add-post-form";

/**
 * Types
 */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create New Post",
  description: "Share your knowledge with the community"
};

export default async function AddPostPage() {
  const user = await getMe();
  const coursesResponse = await getAllDiscoveryCourses("1");
  const courses = coursesResponse?.data || [];

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h1 className="text-2xl text-app-500 font-bold mb-2">Authentication Required</h1>
          <p className="text-app-300">Please log in to create posts.</p>
        </div>
      </div>
    );
  }

  return <AddPostForm user={user} courses={courses} />;
}