/**
 * Components
 */
import LoginForm from "./_components/login-form";

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
        <LoginForm />
    </section>
  )
}
