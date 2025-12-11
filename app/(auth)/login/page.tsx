/**
 * Node Modules
 */
import Link from "next/link";

/**
 * Components
 */
import InputField from "@/app/_components/ui/form/input-field";

/**
 * Types
 */
import type { Metadata } from "next";

export const metadata: Metadata = {
    description: "Identify user credentials"
}

export default function LoginPage() {
  return (
    <section className="max-w-[600px] w-full mx-auto p-5 bg-app-150 rounded-md shadow[0_0_10px_1px] shadow-black/20 space-y-8 py-8">
        <header className="space-y-1">
            <h1 className="text-app-500 text-2xl">Login</h1>
            <span className="text-app-300/60">Please fill the credential bellow.</span>
        </header>
        <form action="" className="space-y-3">
            <InputField id="user-email" label="Email" placeholder="e.g. user@example.com" />
            <InputField id="user-password" label="Password" />
            <div className="space-y-1 mt-16">
                <button className="p-2 rounded-md w-full bg-app-200 text-app-500 font-medium">Login</button>
                <span className="text-sm text-app-300/60">Don't have an account? <Link href="/register" className="text-app-200 hover:underline">Create one here</Link></span>
            </div>
        </form>
    </section>
  )
}
