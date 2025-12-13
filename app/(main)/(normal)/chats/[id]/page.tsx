/**
 * Node Modules
 */
import { PaperPlaneRightIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

/**
 * Components
 */
import Avatar from "@/app/_components/general/avatar";
import MessagesList from "./_components/messages-list";

/**
 * Utils
 */
import { getChatDetail } from "@/app/_datas/chats/get-chat-detail";

interface IChatDetailPage {
    params: Promise<{ id: number }>
}

export default async function ChatDetailPage({ params }: IChatDetailPage) {
    const { id } = await params;

    const chatDetail = await getChatDetail(id);

    if (!chatDetail) {
        return (
            <section className="flex flex-col h-[94svh] items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl text-app-500 mb-4">Chat not found</h1>
                    <p className="text-app-300">The conversation you're looking for doesn't exist.</p>
                </div>
            </section>
        );
    }

    const { participant, messages } = chatDetail;

    return (
        <section className="flex flex-col h-[94svh]">
            <header className="border-b border-b-app-300/20 shrink-0 sticky top-0 left-0 right-0">
                <Link href={`/profile/${participant.id}`} className="py-4 px-2 flex items-center gap-4">
                    <Avatar
                        name={participant.name}
                        imageUrl={participant.avatar_path}
                        className="shrink-0"
                    />
                    <div className="flex flex-col">
                        <span className="text-xl text-app-500">
                            {participant.name}
                        </span>
                        <span className="line-clamp-1 text-sm text-app-300">
                            {participant.bio || 'No bio available'}
                        </span>
                        <span className="text-xs text-app-400">
                            Last active: {new Date(participant.last_active).toLocaleDateString()}
                        </span>
                    </div>
                </Link>
            </header>

            <MessagesList messages={messages.data} />

            <div className="p-4 w-full sticky bottom-0 right-0 left-0 border-t border-t-app-300/20">
                <form className="flex gap-2 w-full">
                    <input
                        type="text"
                        className="bg-app-150 w-full p-3 rounded-xl focus:outline-0"
                        placeholder="Type a message..."
                    />
                    <button className="bg-app-200 rounded-xl w-20 flex items-center justify-center hover:bg-app-200/80 transition-colors">
                        <PaperPlaneRightIcon className="size-6 text-app-500" />
                    </button>
                </form>
            </div>
        </section>
    );
}
