/**
 * Components
 */
import Avatar from "@/app/_components/general/avatar"

/**
 * Types
 */
import type { IUser } from "@/app/_type"
type TUserData = Pick<IUser, "name" | "email" | "avatar_path">

const ProfileCard = ({ name, email, avatar_path }: TUserData) => {
  return (
    <div className="w-full border border-app-150 rounded-2xl p-4 flex flex-2 flex-col gap-4 items-center justify-center">
        <Avatar name={name} imageUrl={avatar_path} className="size-20 *:text-3xl" />
        <div className="text-nowrap flex justify-center flex-col items-center gap-2">
            <h2 className="text-app-400 text-xl font-semibold leading-[77%]">{name}</h2>
            <span className="leading-[77%] text-app-300/60 font-light">{email}</span>
        </div>
    </div>
  )
}

export default ProfileCard