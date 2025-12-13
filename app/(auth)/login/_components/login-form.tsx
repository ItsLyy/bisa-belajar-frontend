"use client"

/**
 * Node Modules
 */
import { useActionState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

/**
 * Actions
 */
import { loginAction } from '../action'

/**
 * Components
 */
import InputField from '@/app/_components/ui/form/input-field'
import { toast } from 'sonner'

interface LoginState {
    success?: boolean;
    error?: string;
    fieldErrors?: Record<string, string[]>;
}

const LoginForm = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirectPath = searchParams.get('redirect') || '/';

    const [state, action, loading] = useActionState(loginAction, undefined as LoginState | undefined)

    useEffect(() => {
        if (state?.success) {
            toast.success("Login successful! Welcome to Bisa Belajar!", {
                duration: 3000,
            });
            // Redirect to the intended page or home
            router.push(redirectPath);
        } else if (state?.error) {
            toast.error("Login failed", {
                description: state.error,
                duration: 5000,
            });
        }
    }, [state, router, redirectPath]);

    return (
        <form action={action} className="space-y-3">
            <InputField
                id="user-email"
                name='user-email'
                label="Email"
                placeholder="e.g. user@example.com"
                error={state?.fieldErrors?.email?.[0]}
            />
            <InputField
                id="user-password"
                name='user-password'
                label="Password"
                type="password"
                error={state?.fieldErrors?.password?.[0]}
            />
            <div className="space-y-1 mt-16">
                <button
                    className="p-2 rounded-md w-full bg-app-200 text-app-500 font-medium disabled:opacity-80 cursor-pointer disabled:cursor-not-allowed"
                    disabled={loading}
                >
                    {loading ? "Logining..." : "Login"}
                </button>
                <span className="text-sm text-app-300/60">
                    Don't have an account?{" "}
                    <Link href="/register" className="text-app-200 hover:underline">
                        Create one here
                    </Link>
                </span>
            </div>
        </form>
    )
}

export default LoginForm