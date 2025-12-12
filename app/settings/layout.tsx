import { ReactNode } from 'react'

export default function SettingLayout({ children }: { children: ReactNode }) {
  return (
    <main className='max-w-[1000px] w-full mx-auto p-4'>{children}</main>
  )
}
