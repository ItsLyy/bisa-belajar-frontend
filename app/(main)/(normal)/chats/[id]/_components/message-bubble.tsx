/**
 * Types
 */
import type { IChatMessage } from "@/app/_datas/chats/get-chat-detail";

interface IMessageBubbleProps {
    message: IChatMessage;
}

const MessageBubble = ({ message }: IMessageBubbleProps) => {
    const isMyMessage = message.is_mine;

    return (
        <div className={`flex ${isMyMessage ? 'justify-end' : 'justify-start'}`}>
            <div className={`p-4 max-w-[80%] rounded-md shadow ${
                isMyMessage
                    ? 'bg-app-200 text-app-500 rounded-bl-xl shadow-app-200/40'
                    : 'bg-app-150 text-app-500 rounded-br-xl shadow-black/20'
            }`}>
                <p className="break-words">{message.content}</p>
                <span className={`text-xs mt-1 block ${
                    isMyMessage ? 'text-app-400' : 'text-app-300'
                }`}>
                    {new Date(message.created_at).toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: false
                    })}
                </span>
            </div>
        </div>
    );
};

export default MessageBubble;