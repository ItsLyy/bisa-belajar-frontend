/**
 * Node Modules
 */
import { CalendarDotsIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return (
        <section>
            <div className="aspect-video w-full relative">
                <Image src={`/`} alt="" fill className="rounded-md" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <header className="py-4">
                <h1 className="text-2xl font-medium text-app-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, dolores.</h1>
                <div className="flex gap-8 text-sm mt-4">
                    <div className="flex items-center gap-2 h-fit text-nowrap shrink-0">
                        <CalendarDotsIcon className="size-4" />
                        <span>20-23-2020</span>
                    </div>
                    <span className="text-app-200">NextJS, ReactJS, Figma, ReactJS, Figma, ReactJS, Figma</span>
                </div>
            </header>
            <div className="mt-4">
                <h2 className="text-app-300/60 text-sm font-medium">DESCRIPTION</h2>
                <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus provident, expedita omnis alias obcaecati voluptate odio quibusdam corrupti consequuntur nisi quae optio rerum vel, aut quas atque qui animi tempora quia saepe eveniet porro. Explicabo, laboriosam non. Aspernatur officiis sint delectus nemo quibusdam alias reprehenderit, quae consequatur sequi nobis inventore maiores. Ipsa voluptas atque laudantium facere accusantium unde perspiciatis veniam et quos, culpa nulla obcaecati doloremque asperiores dolores ut maxime, error, nam sed officia natus. Impedit illum, deserunt aliquam odio vitae quos commodi fugiat maiores vero facilis architecto ipsa, libero minima ea ad doloribus velit quis. Architecto sed dolores odit porro a rem libero optio labore dignissimos quam! Libero consequatur error impedit, eligendi quod minima deleniti! Eligendi minima similique ut.</p>
            </div>
            <footer className="my-8">
                <form>
                    <button className="text-center bg-app-200 rounded-md w-full text-app-500 p-3 font-medium">Enroll</button>
                </form>
            </footer>
        </section>
    )
}