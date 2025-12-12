/**
 * Node Modules
 */
import { getCourse } from "@/app/_datas/courses/get-course";
import { CalendarDotsIcon } from "@phosphor-icons/react/dist/ssr";

/**
 * Custom Modules
 */
import { formatDate } from "@/app/_utils/format-date";

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const course = await getCourse(parseInt(slug));

    return (
        <section>
            {/* <div className="aspect-video w-full relative">
                <Image src={course.image} alt="" fill className="rounded-md" sizes="(max-width: 768px) 100vw, 50vw" />
            </div> */}
            <header className="py-4">
                <h1 className="text-2xl font-medium text-app-500">{course.title}</h1>
                <div className="flex gap-8 text-sm mt-4">
                    <div className="flex items-center gap-2 h-fit text-nowrap shrink-0">
                        <CalendarDotsIcon className="size-4" />
                        <span>{formatDate(course.created_at)}</span>
                    </div>
                    {/* <span className="text-app-200">NextJS, ReactJS, Figma, ReactJS, Figma, ReactJS, Figma</span> */}
                </div>
            </header>
            <div className="mt-4">
                <h2 className="text-app-300/60 text-sm font-medium">DESCRIPTION</h2>
                <p className="mt-2">{course.description}</p>
            </div>
            <footer className="my-8">
                <form>
                    <button className="text-center bg-app-200 rounded-md w-full text-app-500 p-3 font-medium">Enroll</button>
                </form>
            </footer>
        </section>
    )
}