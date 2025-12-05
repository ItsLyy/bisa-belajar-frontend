/**
 * Node Modules
 */
import { SignOutIcon } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { useSidebar } from '../../_hooks/useSidebar'

const Footer = () => {
  const {isSidebarOpen} = useSidebar();
  return (
    <div>
        <Link href="/login" className="w-full flex items-center gap-3 text-center text-red-800 p-1">
          <SignOutIcon className='size-6 shrink-0' />
          <span className={`text-nowrap ${!isSidebarOpen && 'hidden'}`}>Logout</span>
        </Link>
    </div>
  )
}

export default Footer