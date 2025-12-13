/**
 * Components
 */
import CourseCard from "./course-card"

/**
 * Types
 */
import type { ICourse } from "@/app/_type"
import Logo from "./logo"

const CourseList = ({ courses }: { courses: ICourse[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {
        courses?.length > 0 ? courses?.map((course) => <CourseCard key={course.id} {...course} />) :
        (<section className="flex justify-center items-center h-[75svh] w-full gap-2">
          <Logo className="grayscale-100 opacity-60" /> |
          <span>No Course Avaible</span>
        </section>)
      }
    </div>
  )
}

export default CourseList