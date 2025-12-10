/**
 * Components
 */
import Link from "next/link";
import CourseList from "../../../_components/general/course-list";
import ProfileList from "../../../_components/general/profile-list";
import Pagination from "../../../_components/general/pagination";



export default function DiscoveryPage() {
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
            <CourseList />
            <footer className="my-16 flex justify-end">
                <Pagination page={1} />
            </footer>
        </section>
    )
}