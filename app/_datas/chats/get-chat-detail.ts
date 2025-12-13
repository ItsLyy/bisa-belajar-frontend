import { cookies } from "next/headers";

export interface IChatMessage {
    id: number;
    content: string;
    sender: {
        id: number;
        name: string;
        avatar_path?: string;
        bio?: string;
        score: number;
        last_active: string;
    };
    receiver: {
        id: number;
        name: string;
        avatar_path?: string;
        bio?: string;
        score: number;
        last_active: string;
    };
    is_mine: boolean;
    created_at: string;
}

export interface IChatDetail {
    participant: {
        id: number;
        name: string;
        avatar_path?: string;
        bio?: string;
        score: number;
        last_active: string;
    };
    messages: {
        data: IChatMessage[];
        meta: {
            current_page: number;
            last_page: number;
            per_page: number;
            total: number;
        };
    };
    total_messages: number;
    unread_count: number;
    last_message_at: string;
}

export async function getChatDetail(id: number): Promise<IChatDetail | undefined> {
    try {
        const cookiesStore = await cookies();
        const accessToken = cookiesStore.get("access-token");

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/chats/${id}`, {
            headers: {
                "Content-Type": "application/json",
                accept: "application/json",
                Authorization: `Bearer ${accessToken?.value}`
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch chat detail: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.log("Error from fetch chat detail", error);
        return undefined;
    }
}