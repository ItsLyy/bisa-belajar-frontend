/**
 * Node Modules
 */
import React from 'react'

/**
 * Components
 */
import Navbar from './_components/navbar'
import Searchbar from './_components/searchbar'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <Navbar />
        <main className='w-full px-4 flex flex-col gap-4'>
          <Searchbar />
          { children }
        </main>
    </>
  )
}
