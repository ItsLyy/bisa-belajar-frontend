/**
 * Node Modules
 */
import Link from "next/link";
import { BellIcon, ChatTeardropDotsIcon, ListIcon } from "@phosphor-icons/react/dist/ssr";

/**
 * Components
 */
import Logo from "@/app/_components/general/logo";


const Navbar = () => {
    return (
        <header className="flex p-2 justify-between">
            <div className="flex items-center gap-2">
                <button className="p-2 cursor-pointer">
                    <ListIcon className="size-6" weight="light" />
                </button>
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