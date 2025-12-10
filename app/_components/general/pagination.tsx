"use client"

/**
 * Node Modules
 */
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

interface IPaginationProps {
    page: number; 
    pathname?: string
    searchParams?: { [key: string]: string | undefined }
}

const Pagination = ({ pathname = "" }: IPaginationProps ) => {
    const searchParams = useSearchParams();
    const page = parseInt(searchParams.get("page") || "1");
    
    const createQueryString = useCallback(
        (name: string, value: string) => {
          const params = new URLSearchParams(searchParams.toString())
          params.set(name, value)
     
          return params.toString()
        },
        [searchParams]
      )

    const previousPageNumber = page - 1;
    const currentPageNumber = page;
    const nextPageNumber = page + 1;

    return (
    <div className='flex items-center text-app-300 gap-2'>
        {
            previousPageNumber > 0 && 
            <Link 
                href={{
                    pathname,
                    search: createQueryString("page", previousPageNumber.toString()),
                }} 
                shallow
                className='size-12 rounded-md flex items-center justify-center'
            >
                {previousPageNumber}
            </Link>
        }
        <div className='size-12 rounded-md flex items-center justify-center bg-app-200 text-app-500'>
            {currentPageNumber}
        </div>
        <Link 
            href={{
                pathname,
                search: createQueryString("page", nextPageNumber.toString()),
            }}
            shallow
            className='size-12 rounded-md flex items-center justify-center'
        >
            {nextPageNumber}
        </Link>
    </div>
  )
}

export default Pagination