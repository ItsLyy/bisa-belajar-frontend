/**
 * Node Modules
 */
import { cookies } from "next/headers";

export async function getUser(name: string) {
    try {
        const cookiesStore = await cookies();
        const accessToken = cookiesStore.get("access-token");

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/users/${name}`, {
            headers: {
                "Content-Type": "application/json",
                accept: "application/json",
                Authorization: `Bearer ${accessToken?.value}`
            },
        });
        if (!response.ok) return;
        
        const responseJson = await response.json();
        console.log(responseJson)
        return responseJson;
    } catch (error) {
        console.log(error);
    }
}