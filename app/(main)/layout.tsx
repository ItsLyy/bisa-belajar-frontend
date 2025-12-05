/**
 * Node Modules
 */
import React from 'react'

/**
 * Components
 */
import Navbar from './_components/navbar'
import MainLayoutProvider from '../_context/main-layout-context'
import Sidebar from './_components/sidebar'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <MainLayoutProvider>
      <Sidebar />
      <div>
        <Navbar />
        <main className='w-full px-4 flex flex-col gap-4'>
          {children}
        </main>
      </div>
    </MainLayoutProvider>
  )
}
