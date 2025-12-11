/**
 * Node Modules
 */
import { MapPinIcon, StackIcon } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

/**
 * Components
 */
import Avatar from '@/app/_components/general/avatar'

/**
 * Types
 */
import type { IUser } from '@/app/_type'


type TUserData = Pick<IUser, "name" | "longitude" | "latitude" | "bio" | "skills" | "avatar_path">
interface IProfileCardProps extends TUserData {

}

const ProfileCard = async({ name, bio, longitude, latitude, skills, avatar_path }: IProfileCardProps) => {
  return (
    <Link href={`/profile/${name}`} className='w-full p-4 rounded-2xl border border-app-300/20 flex gap-5'>
        <Avatar name={name} imageUrl={avatar_path} className='size-14! shrink-0' />
        <div>
          <h2 className='text-app-500 text-lg'>{name}</h2>
          <p className='text-app-300 line-clamp-2'>{bio}</p>
          <div className='flex gap-4 text-app-300/60 text-sm mt-2'>
            <div className='flex gap-2 items-center'>
              <MapPinIcon className='size-4' weight='duotone'/>
              <span>Jakarta, Indonesia</span>
            </div>
            {
              skills.length > 0 &&
                <div className='flex gap-2 items-center text-app-200'>
                  <StackIcon className='size-4' weight='duotone'/>
                  <span>{skills.join(", ")}</span>
                </div>
            }
          </div>
        </div>
    </Link>
  )
}

export default ProfileCard