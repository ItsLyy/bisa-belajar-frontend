/**
 * Node Modules
 */
import { logoutAction } from "@/app/_actions/logout.action"
import { SignOutIcon } from "@phosphor-icons/react/dist/ssr"

const LogoutButton = () => {
  return (
    <form action={logoutAction}>
        <button className="p-4 flex items-center rounded-xl bg-app-150 overflow-hidden gap-4 w-full cursor-pointer">
            <div className="shrink-0 flex justify-center items-center p-2 rounded-full bg-red-600/30 border border-red-600 text-red-700 shadow-[0_0_180px_40px] shadow-red-600/60">
                <SignOutIcon className="size-6" />
            </div>
            <div>
                <h2 className="uppercase text-sm font-semibold text-red-700">Logout</h2>
            </div>
        </button>
    </form>
  )
}

export default LogoutButton