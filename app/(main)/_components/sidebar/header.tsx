/**
 * Node Modules
 */
import { XIcon } from "@phosphor-icons/react"

/**
 * Components
 */
import Logo from "@/app/_components/general/logo"

/**
 * Custom Hooks
 */
import { useSidebar } from "../../_hooks/useSidebar"

const Header = () => {
    const { onCloseClickEvent, isSidebarOpen } = useSidebar();

    return (
        <header className="flex items-center justify-between w-full">
            <Logo textHidden={!isSidebarOpen} />
            <button className="p-2 cursor-pointer lg:hidden" onClick={onCloseClickEvent}>
                <XIcon className="size-6" weight="light" />
            </button>
        </header>
  )
}

export default Header