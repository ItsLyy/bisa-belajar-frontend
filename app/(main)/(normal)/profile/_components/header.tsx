/**
 * Components
 */
import ProfileCard from "./profile-card"
import ScoreCard from "./score-card"

/**
 * Types
 */
import type { IUser } from "@/app/_type"
type TUserData = Pick<IUser, "name" | "email" | "avatar_path" | "score">

const Header = ({ name, email, avatar_path, score }: TUserData) => {
  return (
    <header className="flex gap-2 h-54">
        <ProfileCard email={email} name={name} avatar_path={avatar_path} />
        <ScoreCard score={score} />
    </header>
  )
}

export default Header