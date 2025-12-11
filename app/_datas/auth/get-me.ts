"server only"

import { cache } from "react";
import { cookies } from "next/headers";

export const getMe = cache(async () => {
    try {
        const cookiesStore = await cookies();
        const accessToken = cookiesStore.get("access-token");

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/me`, {
            headers: {
                accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken?.value}`
            },
        });
        
        if (!res.ok) return;

        const resJson = await res.json();
        return resJson;
    } catch (error) {
        console.log("Error in get auth me", error)
    }
})