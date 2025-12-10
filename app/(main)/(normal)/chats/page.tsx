/**
 * Components
 */
import { TrayIcon } from '@phosphor-icons/react/dist/ssr'
import ChatsList from './_components/chats-list'

/**
 * Types
 */
import type { Metadata } from 'next'

export const metadata: Metadata = {
    description: "List all your connection's chat."
}

export default function ChatPage() {
  return (
    <section>
        <header className='mt-4 mb-5 flex gap-2 items-center'>
            <TrayIcon className='size-8' weight='duotone' />
            <h1 className='text-2xl text-app-500 font-bold '>Your Inbox</h1> 
        </header>
        <div className='p-1'>
            <ChatsList />
        </div>
    </section>
  )
}
