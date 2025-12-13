import { XIcon } from "@phosphor-icons/react/dist/ssr";

const Tags = ({ tags, removeTag }: { tags: string[]; removeTag: (tag: string) => void }) => {
    return (
        <div className={"flex gap-2 grow-0 h-fit"}>
            {
                tags.map((tag, index) => (
                    <button 
                        className={`px-2 py-1.5 leading-[77%] rounded-md flex gap-1 items-center bg-app-200/15 text-app-200 border border-app-200 text-sm cursor-pointer`} 
                        key={index}
                        onClick={() => removeTag(tag)}
                    >
                        <XIcon className="size-3" />
                        {tag}
                    </button>
                ))
            }
        </div>
    )
}

export default Tags