import { cookies } from "next/headers";
import type { ISwap } from "@/app/_type";

export async function getSwap(id: number): Promise<ISwap | undefined> {
    try {
        const cookiesStore = await cookies();
        const accessToken = cookiesStore.get("access-token");

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/swaps/${id}`, {
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
        console.log("Error fetching swap:", error);
        return undefined;
    }
}