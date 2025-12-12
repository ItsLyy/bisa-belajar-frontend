/**
 * Node Modules
 */
import { MapPinIcon, StackIcon } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

/**
 * Components
 */
import Avatar from '@/app/_components/general/avatar'

/**
 * Types
 */
import type { IUser } from '@/app/_type'


type TUserData = Pick<IUser, "id" | "name" | "bio" | "avatar_path">
interface IChatCardProps extends TUserData {
  unreadCount?: number
}

const ChatCard = async({ id, name, bio, avatar_path, unreadCount = 0 }: IChatCardProps) => {
  return (
    <Link href={`/chats/${id}`} className='w-full p-4 rounded-2xl border border-app-300/20 flex gap-5 items-center'>
        <Avatar name={name} imageUrl={avatar_path} className='size-14! shrink-0' />
        <div className='w-full'>
          <h2 className='text-app-500 text-lg'>{name}</h2>
          <p className='text-app-300 text-ellipsis w-62 text-nowrap inline-block overflow-hidden'>{bio}</p>
        </div>
        {unreadCount > 0 && (
          <span className='rounded-full bg-app-200/60 shadow shadow-app-200 font-semibold size-7 text-sm text-app-500 flex justify-center items-center shrink-0'>
            {unreadCount > 99 ? '99+' : unreadCount}
          </span>
        )}
    </Link>
  )
}

export default ChatCard