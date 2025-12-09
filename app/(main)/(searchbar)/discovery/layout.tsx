/**
 * Node Modules
 */
import { ReactNode } from 'react'

/**
 * Components
 */
import Header from './_components/header'

/**
 * Types
 */
import type { Metadata } from "next";

export const metadata: Metadata = {
    description: "Discover exciting courses, peoples, and skills."
}

interface IDiscoveryLayoutProps {
    children: Readonly<ReactNode>;
}

export default function DiscoveryLayout({ children }: IDiscoveryLayoutProps) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}
