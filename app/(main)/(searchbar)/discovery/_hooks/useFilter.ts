import { useState } from "react"

export const useFilter = () => {
    const [tags, setTags] = useState<string[]>([]);
    const pushTag = (tag: string) => {
        setTags((prev) => [tag, ...prev])
    }

    const removeTag = (tag: string) => {
        setTags((prev) => {
            return prev.filter((item) => item != tag)
        })
    }

    return {tags, pushTag, removeTag}
}