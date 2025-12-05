/**
 * Node Modules
 */
import Link from "next/link";
import { BellIcon, ChatTeardropDotsIcon } from "@phosphor-icons/react/dist/ssr";

/**
 * Components
 */
import Logo from "@/app/_components/general/logo";
import SidebarOpenBtn from "./sidebar-open-btn";


const Navbar = () => {
    return (
        <header className="flex p-2 justify-between">
            <div className="flex items-center gap-2">
                <SidebarOpenBtn />
                <Logo />
            </div>
            <div className="flex items-center gap-4">
                <Link href="/notifications" className="p-2">
                    <BellIcon className="size-6" weight="duotone" />
                </Link>
                <Link href="/chats" className="p-2">
                    <ChatTeardropDotsIcon className="size-6" weight="duotone" />
                </Link>
            </div>
        </header>
    )
}

export default Navbar;