/**
 * Node Modules
 */
import { InfoIcon, MapPinIcon, UserCircleIcon, UserFocusIcon } from "@phosphor-icons/react/dist/ssr"

/**
 * Components
 */
import SettingCard from "./setting-card"

const SettingList = () => {
  return (
    <div className="space-y-3">
      <SettingCard icon={InfoIcon} title="Bio" link="/settings/bio" />
      <SettingCard icon={UserFocusIcon} title="Skills" link="/settings/skills" />
      <SettingCard icon={MapPinIcon} title="Location" link="/settings/location" />
      <SettingCard icon={UserCircleIcon} title="Avatar" value="Changing user avatar" link="/settings/avatar" />
      </div>
  )
}

export default SettingList;