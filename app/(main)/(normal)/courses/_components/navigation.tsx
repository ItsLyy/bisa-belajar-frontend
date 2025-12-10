"use client"

/**
 * Node Modules
 */
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navigation = () => {
    const pathname = usePathname();
    const isOwnedCategory = pathname === '/courses/owned'

    return (
        <nav className="flex p-1 gap-1 w-full rounded-md border border-app-300/20 bg-app-300/5 *:flex-1 *:rounded-md *:text-center *:p-2">
            <Link href="/courses" className={`${!isOwnedCategory && 'bg-app-300/20'}`}>Enrolled</Link>
            <Link href="/courses/owned" className={`${isOwnedCategory && 'bg-app-300/20'}`}>Owned</Link>
        </nav>
    )
}

export default Navigation