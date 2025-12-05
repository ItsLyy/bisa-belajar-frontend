/**
 * Node Modules
 */
import { MagnifyingGlassIcon } from "@phosphor-icons/react/dist/ssr";

const Searchbar = () => {
    return (
        <form className="w-full rounded-lg flex items-center gap-2 bg-app-150">
            <MagnifyingGlassIcon className="size-6 ml-4 text-app-300/60" />
            <input className="w-full p-2 focus:outline-0" placeholder="Search for people" />
        </form>
    )
}

export default Searchbar;
