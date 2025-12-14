"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation";

export async function logoutAction() {
    try {
        const cookiesStore = await cookies()
        const accessToken = cookiesStore.get('access-token')?.value;

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/logout`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })

        if (!response.ok) {
            return;
        }

        cookiesStore.delete('access-token');
        return redirect('/login')
    } catch (error) {
        console.log("Error in logout action", error)
    }
}