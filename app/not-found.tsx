import Link from "next/link";

export default function Loading() {
  return (
    <div className='flex flex-col gap-2 justify-center items-center h-svh w-full'>
        <h2 className="text-4xl text-app-300/60 font-black">404</h2>
        <h2 className="text-app-300/60">Page Not Found, <Link href={"/"} className="text-app-200 hover:underline">Go Home</Link></h2>
    </div>
  )
}
