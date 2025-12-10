/**
 * Node Modules
 */
import { ReactNode } from 'react'

/**
 * Components
 */
import Navigation from '../../../(normal)/courses/_components/navigation'
import Pagination from '@/app/_components/general/pagination'

export default function CourseIndexLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
        <Navigation />
        { children }
        <footer className='flex justify-end mb-8 mt-4'>
            <Pagination page={1} />
        </footer>
    </>
  )
}
