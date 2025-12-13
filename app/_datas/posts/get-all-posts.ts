"server only"

/**
 * Node Modules
 */
import { cookies } from "next/headers";

export async function getAllPosts() {
    try {
        const cookiesStore = await cookies();
        const accessToken = cookiesStore.get("access-token");

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/posts`, {
            headers: {
                "Content-Type": "application/json",
                accept: "application/json",
                Authorization: `Bearer ${accessToken?.value}`
            },
        });
        if (!response.ok) return;

        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.log(error);
    }
}
