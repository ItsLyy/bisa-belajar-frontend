"use client"

/**
 * Node Modules
 */
import NavMenu from "./nav-menu"

/**
 * Components
 */
import Header from "./header"
import Footer from "./footer"

/**
 * Custom Hooks
 */
import { useSidebar } from "../../_hooks/useSidebar"

const Sidebar = () => {
  const { onCloseClickEvent, isSidebarOpen, isAnimating } = useSidebar()

  return (
    <>
        {/* Backdrop - disabled during animation to prevent spam clicks */}
        <div
            className={`h-svh w-full fixed top-0 left-0 right-0 bottom-0 bg-black/80 z-10 transition-all ease-in-out duration-300 ${
                isSidebarOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
            } ${isAnimating ? 'cursor-wait' : 'cursor-pointer'}`}
            onClick={isAnimating ? undefined : onCloseClickEvent}
        />

        {/* Sidebar Panel */}
        <aside className={`p-4 h-svh flex flex-col fixed top-0 bottom-0 w-80 bg-app-150 rounded-r-2xl z-40 gap-4 transition-all ease-in-out duration-300 ${
            isSidebarOpen ? 'left-0' : '-left-80'
        } ${isAnimating ? 'pointer-events-none' : ''}`}>
            {/* Loading indicator during animation */}
            {isAnimating && (
                <div className="absolute inset-0 bg-app-150/50 rounded-r-2xl flex items-center justify-center z-50">
                    <div className="w-6 h-6 border-2 border-app-200 border-t-transparent rounded-full animate-spin" />
                </div>
            )}

            <Header />
            <NavMenu />
            <Footer />
        </aside>
    </>
  )
}

export default Sidebar