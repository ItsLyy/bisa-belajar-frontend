/**
 * Node Modules
 */
import Link from 'next/link'

const Pagination = ({ page, searchParams }: { page: number; searchParams?: { [key: string]: string | undefined } }) => {
    const previousPageNumber = page - 1;
    const currentPageNumber = page;
    const nextPageNumber = page + 1;

    return (
    <div className='flex items-center text-app-300 gap-2'>
        {
            previousPageNumber > 0 && 
            <Link 
                href={{
                    pathname: '/discovery/search',
                    query: {
                        ...searchParams,
                        page: previousPageNumber,
                    }
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
                pathname: '/discovery/search',
                query: {
                    ...searchParams,
                    page: nextPageNumber,
                },
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