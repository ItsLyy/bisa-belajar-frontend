/**
 * Components
 */
import Header from "./_components/header";
import SettingList from "./_components/setting-list";
import LogoutButton from "./_components/logout-button";

/**
 * DAL
 */
import { getMe } from "../../../_datas/auth/get-me";

/**
 * Types
 */
import type { Metadata } from "next";
import getUserLocation from "@/app/_datas/users/get-user-location";

export const metadata: Metadata = {
  description: "Authenticated user data information."
}

export default async function ProfilePage() {
  const user = await getMe();

  const locationPromise = user?.latitude && user?.longitude
    ? getUserLocation(user.latitude, user.longitude)
    : Promise.resolve(null);

  const [location] = await Promise.all([locationPromise]);

  return (
    <section className="space-y-3">
        <Header
          name={user?.name || "User"}
          email={user?.email || ""}
          score={user?.score || 0}
        />
        <h1 className="font-semibold text-sm text-app-300/60">SETTINGS</h1>
        <SettingList
          bio={user?.bio || ""}
          skills={user?.skills?.map((item: { name: string }) => item.name) || []}
          longitude={user?.longitude || 0}
          latitude={user?.latitude || 0}
          location={location || { placename: "Unknown", street: "Location not available" }}
        />
        <LogoutButton />
    </section>
  )
}
