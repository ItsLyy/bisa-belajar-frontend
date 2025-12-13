/**
 * Node Modules
 */
import { ReactNode } from "react";

export default function AuthLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <main className="p-4 max-w-[1000px] w-full mx-auto flex items-center justify-center h-svh">{children}</main>
  )
}
