/**
 * Node Modules
 */
import Image from "next/image" 
import Link from "next/link"

/**
 * Components
 */
import Tags from "./tags"

/**
 * Type
 */
import type { ICourse } from "@/app/_type"

const CourseCard = ({ title, id, created_at, updated_at, owner, image_url = "/", skills }: ICourse) => {
  return (
    <Link href={`/courses/${id}`} className="flex flex-col overflow-hidden rounded-xl border border-app-300/20">
        <div className="aspect-video w-full relative">
            <Image src={image_url || "/"} alt="course" className="object-cover" fill sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
        <div className="p-4">
            <h2 className="text-xl text-app-500">{title}</h2>
            <span className="mb-3 block">{owner?.name}</span>
            <Tags tags={skills?.map(skill => skill.name)} />
        </div>
    </Link>
  )
}

export default CourseCard