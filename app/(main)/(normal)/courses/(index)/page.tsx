/**
 * Components
 */
import CourseList from '@/app/_components/general/course-list'
import { getAllEnrolledCourses } from '@/app/_datas/courses/get-all-courses';

/**
 * Types
 */
import type { Metadata } from 'next';

export const metadata: Metadata = {
    description: "List all your enrolled courses."
}

export default async function CoursePage({ searchParams }: { searchParams: Promise<{ page: string }> }) {
    const params = await searchParams;  
    const courses = await getAllEnrolledCourses();
    return (
        <section className='pb-4 space-y-4'>
            <CourseList courses={courses.data} />
        </section>
    )
}
