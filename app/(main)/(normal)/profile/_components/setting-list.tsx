/**
 * Node Modules
 */
import { InfoIcon, MapPinIcon, UserCircleIcon, UserFocusIcon } from "@phosphor-icons/react/dist/ssr"

/**
 * Components
 */
import SettingCard from "./setting-card"

/**
 * Types
 */
import { IUser } from "@/app/_type"

type TUserData = Pick<IUser, "bio" | "longitude" | "latitude">
interface SettingListProps extends TUserData {
  skills: string[];
  location: {
    placename: string;
    street: string;
  };
}

const SettingList = ({ bio, skills, longitude, latitude, location }: SettingListProps) => {
  return (
    <div className="space-y-3">
      <SettingCard icon={InfoIcon} title="Bio" value={bio} link="/settings/bio" />
      <SettingCard icon={UserFocusIcon} title="Skills" value={skills?.join(", ")} link="/settings/skills" />
      <SettingCard icon={MapPinIcon} title="Location" value={`${location.placename}, ${location.street}`} link="/settings/location" />
      <SettingCard icon={UserCircleIcon} title="Avatar" value="Changing user avatar" link="/settings/avatar" />
      </div>
  )
}

export default SettingList;