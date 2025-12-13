"use client"

/**
 * Node Modules
 */
import { ReactNode } from "react"

/**
 * Types
 */
import type { IUser } from "@/app/_type"

const AuthLayout = ({ children, user }: { children: ReactNode; user: Promise<IUser> }) => {
    
    return (
        <>{children}</>
    )
}

export default AuthLayout