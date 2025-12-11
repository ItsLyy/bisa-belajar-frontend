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
    description: "Create user credentials"
}

export default function RegisterPage() {
  return (
    <section className="max-w-[600px] w-full mx-auto p-5 bg-app-150 rounded-md shadow[0_0_10px_1px] shadow-black/20 space-y-8 py-8">
        <header className="space-y-1">
            <h1 className="text-app-500 text-2xl">Register</h1>
            <span className="text-app-300/60">Please fill the credential bellow.</span>
        </header>
        <form action="" className="space-y-3">
            <InputField id="user-name" label="Name" placeholder="e.g. user" />
            <InputField id="user-email" label="Email" placeholder="e.g. user@example.com" />
            <InputField id="user-password" label="Password" type="password" />
            <InputField id="user-password-confirmation" label="Password Confirmation" type="password" />
            <div className="space-y-1 mt-16">
                <button className="p-2 rounded-md w-full bg-app-200 text-app-500 font-medium">Register</button>
                <span className="text-sm text-app-300/60">Already have an account? <Link href="/login" className="text-app-200 hover:underline">Login here</Link></span>
            </div>
        </form>
    </section>
  )
}
