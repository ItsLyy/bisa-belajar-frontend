/**
 * Components
 */
import Link from "next/link";
import CourseList from "../../../_components/general/course-list";
import ProfileList from "../../../_components/general/profile-list";
import Pagination from "../../../_components/general/pagination";
import { getAllDiscoveryCourses } from "@/app/_datas/courses/get-all-courses";



export default async function DiscoveryPage({ searchParams }: { searchParams: Promise<{ page: string }> }) {
    const params = await searchParams;
    const { page } = params;

    const courses = await getAllDiscoveryCourses(page);
    console.log(courses.data)
    return (
        <section>
            <div className="flex justify-between mb-2 px-1">
                <h1 className="text-sm text-app-300/60">PROFILES</h1>
                <Link href={`/discovery/search?category=people`} className="text-sm text-app-200 hover:underline">See More</Link>
            </div>
            <ProfileList />
            <div className="flex justify-between mt-4 mb-2 px-1">
                <h1 className="text-sm text-app-300/60">COURSES</h1>
            </div>
            <CourseList courses={courses?.data} />
            <footer className="my-16 flex justify-end">
                <Pagination lastPage={courses.last_page} />
            </footer>
        </section>
    )
}