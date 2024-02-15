import { Outlet } from 'react-router-dom'

import { Header } from '@/components/ui/header'

export const AppLayout = () => {
  return (
    <div className="antialiased relative scroll-smooth min-h-screen bg-neutral-100 ">
      <Header />

      <div className="flex flex-1">
        <Outlet />
      </div>
    </div>
  )
}
