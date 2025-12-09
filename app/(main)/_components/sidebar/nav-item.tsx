/**
 * Node Modules
*/
import Link from 'next/link'
import { usePathname } from 'next/navigation';

/**
 * Types
 */
import type { Icon } from '@phosphor-icons/react';
import { useSidebar } from '../../_hooks/useSidebar';

interface INavItem {
    name: string;
    icon: Icon;
    url: string;
}

const NavItem = ({ name, icon, url }: INavItem) => {
    const {isSidebarOpen} = useSidebar();
    const Icon = icon;
    const pathname = usePathname();

    const isActive = (pathname.includes(url) && url != "/") || url == pathname

    return (
        <Link href={url} className={`px-1 py-4 text-nowrap flex items-center gap-4 text-app-300/60 hover:text-app-300 transition-colors ease-in-out duration-300 ${isActive ? 'text-app-500 hover:text-app-500': 'text-app-300/60'}`}>
            <Icon className='size-6 shrink-0' weight='duotone' />
            <span className={!isSidebarOpen ? 'lg:hidden': ''}>{name}</span>
        </Link>
    )
}

export default NavItem