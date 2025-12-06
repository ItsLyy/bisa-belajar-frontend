import { useMainLayout } from "@/app/_context/main-layout-context.hook"
import { useEffect } from "react";

export const useSidebar = () => {
    const { isSidebarOpen, setIsSidebarOpen, isAnimating, toggleSidebar } = useMainLayout();

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isSidebarOpen && !isAnimating) {
                toggleSidebar();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isSidebarOpen, isAnimating]);

    const onCloseClickEvent = () => {
        if (!isAnimating) {
            setIsSidebarOpen(false);
        }
    }

    const onOpenClickEvent = () => {
        if (!isAnimating) {
            setIsSidebarOpen(true);
        }
    }

    return {
        isSidebarOpen,
        setIsSidebarOpen,
        isAnimating,
        toggleSidebar,
        onCloseClickEvent,
        onOpenClickEvent
    }
}