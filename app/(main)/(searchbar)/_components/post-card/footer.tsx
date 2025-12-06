/**
 * Node Modules
 */
import { CalendarDotsIcon } from "@phosphor-icons/react/dist/ssr"

/**
 * Custom
 */
import { formatDate } from "@/app/_utils/format-date"

const Footer = ({ date, threads }: { date: string, threads: number }) => {
  return (
    <footer className="flex gap-8">
        <div className="flex gap-2 items-center">
            <span className="text-sm text-app-300/60">{threads || 0} Threads</span>
        </div>
        <div className="flex gap-2 items-center">
            <CalendarDotsIcon className="size-4 text-app-300/60" />
            <span className="text-sm text-app-300/60">{formatDate(date)}</span>
        </div>
    </footer>
  )
}

export default Footer