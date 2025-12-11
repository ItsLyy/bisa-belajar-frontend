/**
 * Components
 */
import Header from "./_components/header";
import SettingList from "./_components/setting-list";
import LogoutButton from "./_components/logout-button";

/**
 * Types
 */
import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "Authenticated user data information."
}

export default function ProfilePage() {
  return (
    <section className="space-y-3">
        <Header name="John" email="john@example.com" score={200} />
        <h1 className="font-semibold text-sm text-app-300/60">SETTINGS</h1>
        <SettingList />
        <LogoutButton />
    </section>
  )
}
