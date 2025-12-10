/**
 * Node Modules
 */
import { PaperPlaneRightIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

/**
 * Components
 */
import Avatar from "@/app/_components/general/avatar";

interface IChatDetailPage {
    params: Promise<{ name: string }>
}

export default async function ChatDetailPage({ params }: IChatDetailPage) {
    const { name } = await params;
    const decodeName = decodeURIComponent(name);

    return (
        <section className="flex flex-col h-[94svh]">
            <header className="border-b border-b-app-300/20 shrink-0 sticky top-0 left-0 right-0">
                <Link href={`/profiles/${name}`} className="py-4 px-2 flex items-center gap-4 ">
                    <Avatar name={decodeName} className="shrink-0" />
                    <div className="flex flex-col">
                        <span className="text-xl text-app-500">
                            {decodeName}
                        </span>
                        <span className="line-clamp-1 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores necessitatibus sed fugiat aperiam cupiditate soluta assumenda rerum doloribus veritatis delectus impedit corporis saepe adipisci doloremque dolorem eum vitae minus </span>
                    </div>
                </Link>
            </header>
            <div className="flex flex-col gap-2 p-4 h-full overflow-y-scroll justify-end *:h-fit">
                <span className="p-4 bg-app-150 w-fit text-app-500 rounded-br-xl rounded-md shadow shadow-black/20 max-w-[80%]">just kidding</span>
                <div className="flex justify-end">
                    <span className="p-4 bg-app-200 w-fit text-app-500 rounded-bl-xl rounded-md shadow shadow-app-200/40 max-w-[80%]">Nahhh your lying broo</span>
                </div>
            </div>
            <div className="p-4 w-full sticky bottom-0 right-0 left-0">
                <form className="flex gap-2 w-full">
                    <input type="text" className="bg-app-150 w-full p-3 rounded-xl  focus:outline-0" placeholder="Type chat here" />
                    <button className="bg-app-200 rounded-xl w-20 flex items-center justify-center">
                        <PaperPlaneRightIcon className="size-6 text-app-500" />
                    </button>
                </form>
            </div>
        </section>
    )
}
