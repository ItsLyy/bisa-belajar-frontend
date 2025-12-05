/**
 * Node Modules
*/
import Link from 'next/link'
import { usePathname } from 'next/navigation';

/**
 * Types
 */
import type { Icon } from '@phosphor-icons/react';

interface INavItem {
    name: string;
    icon: Icon;
    url: string;
}

const NavItem = ({ name, icon, url }: INavItem) => {
    const Icon = icon;
    const pathname = usePathname();

    const isActive = pathname.includes(url) && pathname != "/" || pathname == url

    return (
        <Link href={url} className={`px-1 py-4 flex items-center gap-4 text-app-300/60 hover:text-app-300 transition-colors ease-in-out duration-300 ${isActive ? 'text-app-500': 'text-app-300/60'}`}><Icon className='size-6' weight='duotone' />{name}</Link>
    )
}

export default NavItem