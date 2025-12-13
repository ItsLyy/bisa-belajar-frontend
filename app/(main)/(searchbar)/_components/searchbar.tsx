"use client"

/**
 * Node Modules
 */
import { MagnifyingGlassIcon } from "@phosphor-icons/react/dist/ssr";
import { useRouter, useSearchParams } from "next/navigation";
import { KeyboardEvent } from "react";

const Searchbar = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const onSearchEvent = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            const currentParams = new URLSearchParams(searchParams.toString());
            const value = (e.target as HTMLInputElement).value

            currentParams.set("q", value);
            currentParams.set("page", "1");
            currentParams.set("category", value.slice(0, 1) === '@' ? "people" : "");
            
            router.push(`/discovery/search?${currentParams}`)
        }
    } 

    return (
        <div className="w-full rounded-lg flex items-center gap-1 bg-app-150">
            <MagnifyingGlassIcon className="size-5 ml-4 text-app-300/60" />
            <input className="w-full p-3 focus:outline-0" placeholder="Search for course or @people" onKeyDown={onSearchEvent} />
        </div>
    )
}

export default Searchbar;
