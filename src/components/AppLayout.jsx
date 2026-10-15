import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Drawer } from './Drawer.jsx'
import { NavigationMenu, Navbar } from './Navbar.jsx'

export function AppLayout() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <div className="app-layout">
      <Navbar onMenuOpen={() => setIsDrawerOpen(true)} />
      <main className="app-main">
        <Outlet />
      </main>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <NavigationMenu onNavigate={() => setIsDrawerOpen(false)} />
      </Drawer>
    </div>
  )
}
