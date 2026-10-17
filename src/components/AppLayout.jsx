import { useState } from 'react'
<<<<<<< HEAD
import { Outlet } from 'react-router-dom'
import { Drawer } from './Drawer.jsx'
import { BottomNav, NavigationMenu, Navbar } from './Navbar.jsx'

=======
import { Link, Outlet } from 'react-router-dom'
import { Drawer } from './Drawer.jsx'
import { BottomNav, NavigationMenu, Navbar } from './Navbar.jsx'

function AppFooter() {
  return (
    <footer className="shared-footer app-footer">
      <Link to="/dashboard" className="shared-brand" aria-label="Priori dashboard">
        <img src="/assets/priori_logo.svg" alt="" />
        <span>priori<span className="shared-brand__dot">.</span></span>
      </Link>
      <p>Kelola tugas dengan lebih terarah.</p>
    </footer>
  )
}

>>>>>>> update
export function AppLayout() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <div className="app-layout">
      <Navbar onMenuOpen={() => setIsDrawerOpen(true)} />
      <main className="app-main">
        <Outlet />
      </main>
<<<<<<< HEAD
=======
      <AppFooter />
>>>>>>> update
      <BottomNav />
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <NavigationMenu onNavigate={() => setIsDrawerOpen(false)} />
      </Drawer>
    </div>
  )
}
