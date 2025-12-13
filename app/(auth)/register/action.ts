"use server"

/**
 * Node Modules
 */
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers";
import { z } from "zod";

interface RegisterState {
    success?: boolean;
    error?: string;
    fieldErrors?: Record<string, string[]>;
}

export async function registerAction(prevState: RegisterState | undefined, formData: FormData): Promise<RegisterState> {
    try {
        const userName = formData.get("user-name");
        const userEmail = formData.get("user-email");
        const userPassword = formData.get("user-password");
        const userPasswordConfirmation = formData.get("user-password-confirmation");

        const registerSchema = z.object({
            name: z.string()
                .min(4, "Name must be at least 4 characters!")
                .max(20, "Name cannot be more than 20 characters!"),
            email: z.string().email("Please enter a valid email address!"),
            password: z.string()
                .min(8, "Password must be at least 8 characters!")
                .max(20, "Password cannot be more than 20 characters!"),
            confirm: z.string(),
        }).refine((data) => data.password === data.confirm, {
            message: "Passwords don't match",
            path: ["confirm"],
        });

        const validatedField = registerSchema.safeParse({
            name: userName,
            email: userEmail,
            password: userPassword,
            confirm: userPasswordConfirmation,
        })

        if (!validatedField.success) {
            const fieldErrors = validatedField.error.flatten().fieldErrors;
            return {
                error: "Please fix the validation errors below",
                fieldErrors
            };
        };

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                accept: "application/json"
            },
            body: JSON.stringify({
                name: validatedField.data.name,
                email: validatedField.data.email,
                password: validatedField.data.password,
                password_confirmation: validatedField.data.confirm
            }),
        });

        if (!res.ok) {
            const errorData = await res.json().catch(() => ({}));
            return {
                error: errorData.message || `Registration failed (${res.status})`
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
        console.error("Error from register page", error);
        return {
            error: "An unexpected error occurred. Please try again."
        };
    }
}
