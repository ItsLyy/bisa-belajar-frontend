/**
 * Node Modules
 */
import { AppWindowIcon, BellIcon, ChatsTeardropIcon, HouseSimpleIcon, MagnifyingGlassIcon, UserIcon } from "@phosphor-icons/react/dist/ssr";

/**
 * Custom Modules
 */
import NavItem from "./nav-item";


const menus = [
    {
        name: "Home",
        icon: HouseSimpleIcon,
        url: "/"
    },
    {
        name: "Discovery",
        icon: MagnifyingGlassIcon,
        url: "/discovery"
    },
    {
        name: "Course",
        icon: AppWindowIcon,
        url: "/courses"
    },
    {
        name: "Chat",
        icon: ChatsTeardropIcon,
        url: "/chats"
    },
    {
        name: "Notification",
        icon: BellIcon,
        url: "/notifications"
    },
    {
        name: "Profile",
        icon: UserIcon,
        url: "/profile"
    },
]

const NavMenu = () => {
    return (
        <ul className="space-y-2 h-full">
            {
                menus.map((menu, index) => (
                    <li key={index}><NavItem {...menu} /></li>
                ))
            }
        </ul>
    )
}

export default NavMenu;
