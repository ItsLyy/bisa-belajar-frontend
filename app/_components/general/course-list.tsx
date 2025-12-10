/**
 * Components
 */
import CourseCard from "./course-card"

const CourseList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
    </div>
  )
}

export default CourseList