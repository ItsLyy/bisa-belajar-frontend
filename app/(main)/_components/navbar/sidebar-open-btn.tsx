"use client"

/**
 * Node Modules
 */

import { ListIcon } from "@phosphor-icons/react/dist/ssr"
import { useSidebar } from "../../_hooks/useSidebar"

const SidebarOpenBtn = () => {
    const { toggleSidebar, isAnimating } = useSidebar()

    return (
        <button
            className={`p-2 transition-opacity duration-200 ${
                isAnimating ? 'opacity-50 cursor-wait' : 'cursor-pointer hover:bg-app-150/50 rounded-lg'
            }`}
            onClick={toggleSidebar}
            disabled={isAnimating}
        >
            <ListIcon className={`size-6 transition-transform duration-200 ${isAnimating ? 'rotate-90' : ''}`} weight="light" />
        </button>
    )
}

export default SidebarOpenBtn