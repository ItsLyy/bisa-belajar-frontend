/**
 * Node Modules
 */
import Link from "next/link";
import { ChatsTeardropIcon } from "@phosphor-icons/react/dist/ssr";

/**
 * Compoenents
 */
import CourseList from "@/app/_components/general/course-list";
import Header from "../_components/header";

interface IDetailProfileProps {
    params: Promise<{ name: string }>
}

export default async function DetailProfile({ params }: IDetailProfileProps) {
    const name = decodeURIComponent((await params).name);

    return (
        <section className="space-y-2 pb-8">
            <Header name={name} email="john@example.com" score={200} />
            <div className="flex justify-center gap-2 mt-8">
                <Link href={`/chats/${name}`} className="rounded-full border border-app-200 text-app-200 bg-app-200/20 flex gap-2 justify-center items-center py-2 px-4">
                    <ChatsTeardropIcon className="size-6" />
                    <span className="text-sm">Chat</span>
                </Link>
            </div>
            <div className="p-4 space-y-8">
                <div>
                    <h1 className="text-sm font-semibold text-app-300/60">BIO</h1>
                    <p className="py-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, odio? Maxime sed mollitia beatae provident. Commodi hic repellat labore iste amet.</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <h1 className="text-sm font-semibold text-app-300/60">SKILLS</h1>
                        <p className="text-app-200">ReactJS, NextJS</p>
                    </div>
                    <div>
                        <h1 className="text-sm font-semibold text-app-300/60">ADDRESS</h1>
                        <p>Jakarta, Indonesia</p>
                    </div>
                </div>
                <div className="space-y-2">
                    <h1 className="text-sm font-semibold text-app-300/60">COURSES</h1>
                    <CourseList />
                </div>
            </div>
        </section>
    )
}
