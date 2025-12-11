"use server"

/**
 * Node Modules
 */
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import z from "zod";

interface LoginState {
    success?: boolean;
    error?: string;
    fieldErrors?: Record<string, string[]>;
}

export async function loginAction(prevState: LoginState | undefined, formData: FormData): Promise<LoginState> {
    try {
        const userEmail = formData.get("user-email");
        const userPassword = formData.get("user-password");

        const loginSchema = z.object({
            email: z.email("Please enter a valid email address!"),
            password: z.string()
                .min(8, "Password must be at least 8 characters!")
                .max(20, "Password cannot be more than 20 characters!"),
        })

        const validatedField = loginSchema.safeParse({
            email: userEmail,
            password: userPassword,
        })

        if (!validatedField.success) {
            const fieldErrors = z.flattenError(validatedField.error).fieldErrors;
            return {
                error: "Please fix the validation errors below",
                fieldErrors
            };
        };

        const data = validatedField.data
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/login`, {
            method: "POST",
            headers: {
                accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            const errorData = await res.json().catch(() => ({}));
            return {
                error: errorData.message || `Login failed (${res.status})`
            };
        }

        const resJson = await res.json();
        const cookiesStore = await cookies();

        cookiesStore.set("access-token", resJson.token, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7 * 4
        });

        revalidatePath("/");
        return { success: true };
    } catch(error) {
        console.error("Error from login page", error);
        return {
            error: "An unexpected error occurred. Please try again."
        };
    }
}