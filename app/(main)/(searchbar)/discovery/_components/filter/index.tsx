"use client"

/**
 * Node Modules
 */
import { FunnelIcon } from "@phosphor-icons/react/dist/ssr"
import { createContext, Dispatch, KeyboardEvent, ReactNode, SetStateAction, useContext, useMemo, useState } from "react"

/**
 * Components
 */
import Tags from "./tags"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

interface IFilterContext {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const initialValue = {
    isOpen: false,
    setIsOpen: () => {}
}
const FilterContext = createContext<IFilterContext>(initialValue)
const useFilter = () => {
    const context = useContext(FilterContext);
    if (!context) throw new Error("This hook called outside the provider!");

    const [tags, setTags] = useState<string[]>([]);
    const pushTag = (tag: string) => {
        setTags((prev) => [tag, ...prev])
    }

    const removeTag = (tag: string) => {
        setTags((prev) => {
            return prev.filter((item) => item != tag)
        })
    }

    return {...context, tags, pushTag, removeTag};
}

const Filter = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const valueContext = useMemo(() => ({
        isOpen,
        setIsOpen
    }), [isOpen]);

    return (
        <FilterContext value={valueContext}>
            <header className="flex flex-col gap-2 justify-end">{children}</header>
        </FilterContext>
    )
}

const Toggle = () => {
    const { setIsOpen } = useFilter();
    return (
        <button className="flex gap-2 px-1 items-center text-app-300/60 cursor-pointer" onClick={() => setIsOpen(prev => !prev)}>
            <FunnelIcon className="size-5" />
            <span>Filter</span>
        </button>
    )
}

const Content = () => {
    const {isOpen, tags, removeTag, pushTag} = useFilter();
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const spaceInputEvent = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === ' ') {
            e.preventDefault();
            const inputValue = (e.target as HTMLInputElement).value.trim();
            if (inputValue && !tags.includes(inputValue)) {
                pushTag(inputValue);
                (e.target as HTMLInputElement).value = '';
            }
        }
    }

    const applyButtonEvent = () => {
        const currentParams = new URLSearchParams(searchParams.toString());

        currentParams.delete("skills");
        if (tags.length > 0) {
            currentParams.set("skills", tags.join(","));
        }
        currentParams.set("page", "1");

        router.push(`${pathname}?${currentParams.toString()}`);
    }

    return (
        <div className={`transition-all ease-in-out duration-300 overflow-hidden box-border bg-app-150 rounded-lg shadow shadow-black/10 ${isOpen ? 'h-28.5' : 'h-0'}`}>
            <div className="w-full border-b border-app-300/5 flex gap-4 items-center px-3">
                {tags.length > 0 && <Tags tags={tags} removeTag={removeTag} />}
                <input className="focus:outline-0 size-full py-4" placeholder="Search for skill" onKeyDown={spaceInputEvent} />
            </div>
            <div className="flex justify-end p-3">
                <button className="py-2 px-4 cursor-pointer rounded-md text-app-500 bg-app-200 text-sm font-medium" onClick={applyButtonEvent}>Apply</button>
            </div>
        </div>
    )
}

Filter.Toggle = Toggle;
Filter.Content = Content;

export default Filter;