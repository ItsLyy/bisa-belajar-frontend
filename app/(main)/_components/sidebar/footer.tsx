/**
 * Node Modules
 */
import { SignOutIcon } from '@phosphor-icons/react/dist/ssr'

/**
 * Custom Modules
 */
import { useSidebar } from '../../_hooks/useSidebar'
import { logoutAction } from '@/app/_actions/logout.action';

const Footer = () => {
  const {isSidebarOpen} = useSidebar();
  return (
    <form action={logoutAction}>
        <button className="w-full flex items-center gap-3 text-center text-red-800 p-1 cursor-pointer">
          <SignOutIcon className='size-6 shrink-0' />
          <span className={`text-nowrap ${!isSidebarOpen && 'hidden'}`}>Logout</span>
        </button>
    </form>
  )
}

export default Footer