/**
 * Node Modules
 */
import Image from "next/image"
import Link from "next/link"

/**
 * Components
 */
import Tags from "./tags"

const CourseCard = () => {
  return (
    <Link href={`/`} className="flex flex-col overflow-hidden rounded-xl border border-app-300/20">
        <div className="aspect-video w-full relative">
            <Image src={`/`} alt="course" fill sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
        <div className="p-4">
            <h2 className="text-xl text-app-500">How to become millionire!</h2>
            <span className="mb-3 block">John Smith</span>
            <Tags tags={["NextJS", "ReactJS", "Tailwindcss", "Figma"]} />
        </div>
    </Link>
  )
}

export default CourseCard