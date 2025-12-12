/**
 * Components
 */
import MessageBubble from "./message-bubble";

/**
 * Types
 */
import type { IChatMessage } from "@/app/_datas/chats/get-chat-detail";

interface IMessagesListProps {
    messages: IChatMessage[];
}

const MessagesList = ({ messages }: IMessagesListProps) => {
    return (
        <div className="flex flex-col gap-3 p-4 h-full overflow-y-auto justify-end">
            {messages.length > 0 ? (
                messages.map((message) => (
                    <MessageBubble key={message.id} message={message} />
                ))
            ) : (
                <div className="flex items-center justify-center h-full">
                    <p className="text-app-300 text-center">No messages yet. Start the conversation!</p>
                </div>
            )}
        </div>
    );
};

export default MessagesList;