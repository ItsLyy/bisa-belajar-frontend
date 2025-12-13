"server only"

import { cookies } from "next/headers";
import type { IPost } from "@/app/_type";

export async function getPost(id: string): Promise<IPost | undefined> {
    try {
        const cookiesStore = await cookies();
        const accessToken = cookiesStore.get("access-token");

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/posts/${id}`, {
            headers: {
                "Content-Type": "application/json",
                accept: "application/json",
                Authorization: `Bearer ${accessToken?.value}`
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch post: ${response.status}`);
        }

        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.log("Error fetching post:", error);
        return undefined;
    }
}