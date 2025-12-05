"use client"

import { createContext, Dispatch, DispatchWithoutAction, ReactNode, SetStateAction, useMemo, useState } from "react"

interface IMainLayoutContext {
    isSidebarOpen: boolean
    setIsSidebarOpen: Dispatch<SetStateAction<boolean>>
    isAnimating: boolean
    toggleSidebar: () => void
}

const initialValue = {
    isSidebarOpen: false,
    setIsSidebarOpen: () => {},
    isAnimating: false,
    toggleSidebar: () => {}
}

export const MainLayoutContext = createContext<IMainLayoutContext>(initialValue)

const MainLayoutProvider = ({ children }: { children: ReactNode }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(initialValue.isSidebarOpen);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    const toggleSidebar = () => {
        if (isAnimating) return; // Prevent spam clicks

        setIsAnimating(true);
        setIsSidebarOpen(prev => !prev);

        // Reset animation state after transition completes
        setTimeout(() => setIsAnimating(false), 300); // Match CSS transition duration
    };

    const valueContext = useMemo(() => ({
        isSidebarOpen,
        setIsSidebarOpen,
        isAnimating,
        toggleSidebar
    }), [isSidebarOpen, isAnimating])

    return (
        <MainLayoutContext.Provider value={valueContext}>{children}</MainLayoutContext.Provider>
    )
}

export default MainLayoutProvider;