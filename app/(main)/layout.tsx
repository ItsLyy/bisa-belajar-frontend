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

/**
 * DAL
 */
import { getMe } from '../_datas/auth/get-me'
import AuthProvider from '../_context/auth-layout'

export default async function MainLayout({ children }: { children: React.ReactNode }) {
  const user = await getMe();
  return (
    <MainLayoutProvider>
      <AuthProvider userData={user}>
        <div className='lg:flex w-full'>
          <Sidebar />
          <div className='lg:h-svh lg:flex lg:flex-col lg:bg-app-150 lg:w-full'>
            <Navbar />
            <main className='w-full px-4 lg:border-l lg:border-t lg:border-app-300/40 lg:py-4 lg:rounded-tl-2xl lg:h-full lg:overflow-scroll lg:bg-app-100'>
              <div className='max-w-[1000px] w-full mx-auto flex flex-col gap-4'>
                {children}
              </div>
            </main>
          </div>
        </div>
      </AuthProvider>
    </MainLayoutProvider>
  )
}
