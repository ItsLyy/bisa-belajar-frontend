/**
 * Components
 */
import Avatar from '@/app/_components/general/avatar'

/**
 * Types
 */
import type { IUser } from '@/app/_type'
import Link from 'next/link'

type TUserData = Pick<IUser, "id" | "name" | "avatar_path">
interface IHeaderProps extends TUserData {
    skills: string[]
}

const Header = ({ id, name, avatar_path, skills }: IHeaderProps) => {
    return (
        <header>
            <Link href={`/profile/${id}`} className="flex gap-4 items-center">
                <Avatar name={name} imageUrl={avatar_path} className="shrink-0" />
                <div className="space-y-1 max-w-full pt-2">
                    <h2 className="leading-[77%] text-lg text-app-400">{name}</h2>
                    <span className="leading-[77%] text-app-300/60 text-sm">{skills.length > 0 ? skills.slice(0, 3).join(", ") : "None"}</span>
                </div>
            </Link>
        </header>
    )
}

export default Header