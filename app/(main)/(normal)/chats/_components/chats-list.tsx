/**
 * Components
 */
import ChatCard from './chat-card'

/**
 * Types
 */
import type { IChat } from '@/app/_type'

/**
 * Utils
 */
import { getMe } from '@/app/_datas/auth/get-me'

interface IChatsListProps {
  chats: IChat[]
}

const ChatsList = async ({ chats }: IChatsListProps) => {
  const currentUser = await getMe();

  return (
    <div className='grid grid-cols-1 gap-4'>
      {chats.length > 0 ? (
        chats.map((chat) => {
          // Find the other participant (not the current user)
          const otherParticipant = chat.participants.find(
            participant => participant.id !== currentUser?.id
          ) || chat.participants[0]; // Fallback to first participant if current user not found

          return (
            <ChatCard
              key={chat.id}
              id={otherParticipant.id}
              name={otherParticipant.name}
              bio={otherParticipant.bio || 'No bio available'}
              avatar_path={otherParticipant.avatar_path}
              unreadCount={chat.unread_count}
            />
          );
        })
      ) : (
        <div className='text-center text-app-300 py-8'>
          <p>No chats yet. Start a conversation!</p>
        </div>
      )}
    </div>
  )
}

export default ChatsList