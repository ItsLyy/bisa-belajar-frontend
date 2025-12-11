"use client"

/**
 * Node Modules
 */
import { useActionState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

/**
 * Actions
 */
import { registerAction } from '../action'

/**
 * Components
 */
import InputField from '@/app/_components/ui/form/input-field'
import { toast } from 'sonner'

interface RegisterState {
    success?: boolean;
    error?: string;
    fieldErrors?: Record<string, string[]>;
}

const RegisterForm = () => {
    const router = useRouter();
    const [state, action, loading] = useActionState(registerAction, undefined as RegisterState | undefined)

    useEffect(() => {
        if (state?.success) {
            toast.success("Registration successful! Welcome to Bisa Belajar!", {
                duration: 3000,
            });
            router.push("/");
        } else if (state?.error) {
            toast.error("Registration failed", {
                description: state.error,
                duration: 5000,
            });
        }
    }, [state, router]);

    return (
        <form action={action} className="space-y-3">
            <InputField
                id="user-name"
                name="user-name"
                label="Name"
                placeholder="e.g. user"
                error={state?.fieldErrors?.name?.[0]}
            />
            <InputField
                id="user-email"
                name="user-email"
                label="Email"
                placeholder="e.g. user@example.com"
                error={state?.fieldErrors?.email?.[0]}
            />
            <InputField
                id="user-password"
                name="user-password"
                label="Password"
                type="password"
                error={state?.fieldErrors?.password?.[0]}
            />
            <InputField
                id="user-password-confirmation"
                name="user-password-confirmation"
                label="Password Confirmation"
                type="password"
                error={state?.fieldErrors?.confirm?.[0]}
            />
            <div className="space-y-1 mt-16">
                <button
                    className="p-2 rounded-md w-full bg-app-200 text-app-500 font-medium disabled:opacity-80 cursor-pointer disabled:cursor-not-allowed"
                    disabled={loading}
                >
                    {loading ? "Registering..." : "Register"}
                </button>
                <span className="text-sm text-app-300/60">
                    Already have an account?{" "}
                    <Link href="/login" className="text-app-200 hover:underline">
                        Login here
                    </Link>
                </span>
            </div>
        </form>
    )
}

export default RegisterForm