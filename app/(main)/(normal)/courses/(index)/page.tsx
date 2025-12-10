/**
 * Components
 */
import CourseList from '@/app/_components/general/course-list'
import Pagination from '@/app/_components/general/pagination';

/**
 * Types
 */
import type { Metadata } from 'next';

export const metadata: Metadata = {
    description: "List all your enrolled courses."
}

export default function CoursePage() {
    return (
        <section className='pb-4 space-y-4'>
            <CourseList />
            
        </section>
    )
}
