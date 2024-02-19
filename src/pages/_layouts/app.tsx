import { Outlet } from 'react-router-dom'

import { Header } from '@/components/ui/header'

export const AppLayout = () => {
  return (
    <div className="relative min-h-screen bg-neutral-100 antialiased">
      <Header />

      <div className="flex flex-1 ">
        <Outlet />
      </div>
    </div>
  )
}
