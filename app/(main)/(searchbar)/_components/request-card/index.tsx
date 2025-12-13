/**
 * Node Modules
 */
import Link from 'next/link'

/**
 * Components
 */

import Avatar from '@/app/_components/general/avatar'
import Card from '@/app/_components/ui/card'
import Information from './information'

/**
 * Types
 */
import type { IUser } from '@/app/_type'

type TUserData = Pick<IUser, "id" | "name" | "avatar_path" | "score">
interface IRequestCardProps extends TUserData {
    skill: string;
    description: string;
}

const RequestCard = ({ id, name, avatar_path, score, skill, description }: IRequestCardProps) => {
    return (
        <Card className="min-w-72 flex flex-col gap-4">
            <header className="flex gap-4 items-center">
                <Avatar name={name} imageUrl={avatar_path} className="shrink-0" />
                <Information name={name} skill={skill} score={score} />
            </header>
            <p>{description}</p>
            <div className='flex justify-end'>
                <Link href={`/swaps/${id}`} className='py-2 px-4 rounded-md text-sm bg-app-200/20 text-app-200 font-medium'>CHECK</Link>
            </div>
        </Card>
    )
}

export default RequestCard