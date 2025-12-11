/**
 * Components
 */
import RegisterForm from "./_components/register-form";

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
        <RegisterForm />
    </section>
  )
}
