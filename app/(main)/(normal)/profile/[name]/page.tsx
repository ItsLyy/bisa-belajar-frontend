/**
 * Node Modules
 */
import Link from "next/link";
import { ChatsTeardropIcon, SwapIcon } from "@phosphor-icons/react/dist/ssr";

/**
 * Compoenents
 */
import CourseList from "@/app/_components/general/course-list";
import Header from "../_components/header";

/**
 * DAL
 */
import { getUser } from "@/app/_datas/users/get-user";
import getUserLocation from "@/app/_datas/users/get-user-location";

/**
 * Types
 */
import { ISkill } from "@/app/_type";

interface IDetailProfileProps {
    params: Promise<{ name: string }>
}

export default async function DetailProfile({ params }: IDetailProfileProps) {
    const name = decodeURIComponent((await params).name);
    const user = await getUser(name);
    
    if (!user) return <>NOT FOUND</>

    const userLocation = await getUserLocation(user.latitude, user.longitude);
    return (
        <section className="space-y-2 pb-8">
            <Header name={user.name} email={user.email} score={user.score} />
            <div className="flex justify-center gap-3 mt-8">
                <Link href={`/chats/${user.id}`} className="rounded-full border border-app-200 text-app-200 bg-app-200/20 flex gap-2 justify-center items-center py-2 px-4 hover:bg-app-200/30 transition-colors">
                    <ChatsTeardropIcon className="size-6" />
                    <span className="text-sm">Chat</span>
                </Link>
                <Link href={`/swaps/add?target=${user.id}`} className="rounded-full border border-green-500 text-green-400 bg-green-500/20 flex gap-2 justify-center items-center py-2 px-4 hover:bg-green-500/30 transition-colors">
                    <SwapIcon className="size-6" />
                    <span className="text-sm">Swap Skills</span>
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
