/**
 * Node Modules
 */
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
        <Link href="/login" className="w-full inline-block text-center p-3 rounded-xl bg-app-200 text-app-500">Login</Link>
    </div>
  )
}

export default Footer