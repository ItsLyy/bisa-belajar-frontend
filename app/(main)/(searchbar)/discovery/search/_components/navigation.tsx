import Link from "next/link"

const Navigation = ({ category }: { category?: string }) => {
    const isPeopleCategory = category === 'people';
    return (
        <nav className="flex p-1 gap-1 w-full rounded-md border border-app-300/20 bg-app-300/5 mb-4 *:flex-1 *:rounded-md *:text-center *:p-2">
            <Link href="/discovery/search" className={`${!isPeopleCategory && 'bg-app-300/20'}`}>Course</Link>
            <Link href="/discovery/search?category=people" className={`${isPeopleCategory && 'bg-app-300/20'}`}>People</Link>
        </nav>
    )
}

export default Navigation