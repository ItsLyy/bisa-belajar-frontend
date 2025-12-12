"use client"

/**
 * Node Modules
 */
import { createContext, ReactNode, useMemo, useState } from "react";

/**
 * Types
 */
import type { IUser } from "../_type";

interface IAuthLayout {
    user?: IUser;
    setUser: (value: IUser) => void;
}

const initialValue = {
    setUser: () => {}
}

export const AuthContext = createContext<IAuthLayout>(initialValue);
export default function AuthProvider({ children, userData }: { children: ReactNode, userData?: IUser }) {
    const [user, setUser] = useState<IUser | undefined>(userData);

    const valueContext = useMemo(() => ({
        user,
        setUser
    }), [user])
    return (
        <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
    )
}