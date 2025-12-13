"server only"

import { cookies } from "next/headers";

export async function getCourse(id: number) {
    try {
        const cookiesStore = await cookies();
        const accessToken = cookiesStore.get("access-token");

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/courses/${id}`, {
            headers: {
                "Content-Type": "application/json",
                accept: "application/json",
                Authorization: `Bearer ${accessToken?.value}`
            },
        })

        if (!response.ok) return;
        return await response.json();
    } catch (error) {
        console.log("Error from fetch courses", error);
    }
}