/**
 * Compoenents
 */
import CourseList from "@/app/_components/general/course-list";
import Pagination from "@/app/_components/general/pagination";
import Link from "next/link";

/**
 * Types
 */
import type { Metadata } from "next";

export const metadata: Metadata = {
    description: "List all your created courses."
}

export default function OwnedCoursePage() {
    return (
        <section className='pb-4 space-y-4'>
            <div className="flex justify-end">
                <Link href="/courses/add" className="p-2 bg-app-200 text-app-500 rounded-md">Add Course</Link>
            </div>
            <CourseList />
        </section>
    )
}
