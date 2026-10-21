import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Drawer } from './Drawer.jsx'
import { BottomNav, NavigationMenu, Navbar } from './Navbar.jsx'

function AppFooter() {
  return (
    <footer className="shared-footer app-footer">
      <div className="footer-main">
        <div className="footer-brand-block">
          <Link to="/dashboard" className="shared-brand" aria-label="Priori dashboard">
            <img src="/assets/priori_logo.svg" alt="" />
            <span>priori<span className="shared-brand__dot">.</span></span>
          </Link>
          <p>Kelola tugas dengan lebih terarah.</p>
        </div>
        <nav className="footer-links" aria-label="Tautan footer aplikasi">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/tasks">Tugas</Link>
          <Link to="/notifications">Notifikasi</Link>
          <Link to="/settings">Pengaturan</Link>
        </nav>
      </div>
      <div className="footer-bottom">
        <p>Priori · Modul 7 MVP</p>
        <span className="footer-status"><span aria-hidden="true" /> Data tersimpan di perangkat</span>
      </div>
    </footer>
  )
}

export function AppLayout() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <div className="app-layout">
      <Navbar
        menuOpen={isDrawerOpen}
        onMenuOpen={() => setIsDrawerOpen((current) => !current)}
      />
      <main className="app-main">
        <Outlet />
      </main>
      <AppFooter />
      <BottomNav />
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <NavigationMenu onNavigate={() => setIsDrawerOpen(false)} />
      </Drawer>
    </div>
  )
}
