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
import { getUser } from "@/app/_datas/users/get-user";
import { ISkill } from "@/app/_type";
import getUserLocation from "@/app/_datas/users/get-user-location";

interface IDetailProfileProps {
    params: Promise<{ name: string }>
}

export default async function DetailProfile({ params }: IDetailProfileProps) {
    const name = decodeURIComponent((await params).name);
    const user = await getUser(name);
    const userLocation = await getUserLocation(user.latitude, user.longitude);
    return (
        <section className="space-y-2 pb-8">
            <Header name={user.name} email={user.email} score={user.score} />
            <div className="flex justify-center gap-2 mt-8">
                <Link href={`/chats/${user.name}`} className="rounded-full border border-app-200 text-app-200 bg-app-200/20 flex gap-2 justify-center items-center py-2 px-4">
                    <ChatsTeardropIcon className="size-6" />
                    <span className="text-sm">Chat</span>
                </Link>
            </div>
            <div className="p-4 space-y-8">
                <div>
                    <h1 className="text-sm font-semibold text-app-300/60">BIO</h1>
                    <p className="py-1">{user.bio}</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <h1 className="text-sm font-semibold text-app-300/60">SKILLS</h1>
                        <p className="text-app-200">{user.skills.map((skill: ISkill) => skill.name).join(", ")}</p>
                    </div>
                    <div>
                        <h1 className="text-sm font-semibold text-app-300/60">ADDRESS</h1>
                        <p>{userLocation.placename}. {userLocation.street}</p>
                    </div>
                </div>
                <div className="space-y-2">
                    <h1 className="text-sm font-semibold text-app-300/60">COURSES</h1>
                    <CourseList courses={user.courses} />
                </div>
            </div>
        </section>
    )
}
