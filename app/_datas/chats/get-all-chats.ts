import { cookies } from "next/headers";
import type { IChat } from "@/app/_type";

export async function getAllChats(): Promise<IChat[] | undefined> {
    try {
        const cookiesStore = await cookies();
        const accessToken = cookiesStore.get("access-token");

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/chats`, {
            headers: {
                "Content-Type": "application/json",
                accept: "application/json",
                Authorization: `Bearer ${accessToken?.value}`
            },
        })
        if (!response.ok) return;
        return await response.json();
    } catch (error) {
        console.log("Error from fetch chats", error);
    }
}