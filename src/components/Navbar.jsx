import { Link, NavLink, useNavigate } from 'react-router-dom'
import {
  Bell,
  ClipboardList,
  LayoutDashboard,
  LogOut,
  Menu,
  Settings,
  X,
} from 'lucide-react'
import { Button } from './Button.jsx'
import { appNavigation } from './navigation.js'
import { clearSession } from '../store/auth.js'

function NavigationLinks({ onNavigate }) {
  return appNavigation.map((item) => (
    <NavLink
      key={item.to}
      to={item.to}
      onClick={onNavigate}
      className={({ isActive }) =>
        isActive
          ? 'navigation-link navigation-link--active'
          : 'navigation-link'
      }
    >
      {item.label}
    </NavLink>
  ))
}

export function Navbar({ onMenuOpen, menuOpen = false }) {
  const navigate = useNavigate()

  function handleLogout() {
    clearSession()
    navigate('/login', { replace: true })
  }

  return (
    <header className="app-navbar">
      <Link
        className="brand brand--link"
        to="/dashboard"
        aria-label="Priori, ke Dashboard"
      >
        <img src="/assets/priori_logo.svg" alt="" />
        <span className="app-navbar__wordmark">
          priori<span>.</span>
        </span>
      </Link>

      <nav className="app-navbar__links" aria-label="Navigasi aplikasi">
        <NavigationLinks />
      </nav>

      <Button
        variant="danger"
        className="logout-button"
        onClick={handleLogout}
      >
        <LogOut size={16} />
        Keluar
      </Button>

      <button
        type="button"
        className="menu-button"
        aria-label={menuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
        aria-expanded={menuOpen}
        aria-controls="app-navigation-drawer"
        onClick={onMenuOpen}
      >
        {menuOpen ? <X size={23} /> : <Menu size={23} />}
      </button>
    </header>
  )
}

const BOTTOM_ITEMS = [
  {
    to: '/dashboard',
    label: 'Beranda',
    icon: LayoutDashboard,
  },
  {
    to: '/tasks',
    label: 'Tugas',
    icon: ClipboardList,
  },
  {
    to: '/notifications',
    label: 'Notifikasi',
    icon: Bell,
  },
  {
    to: '/settings',
    label: 'Pengaturan',
    icon: Settings,
  },
]

export function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Navigasi bawah">
      {BOTTOM_ITEMS.map((item) => {
        const Icon = item.icon

        return (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              isActive
                ? 'navigation-link navigation-link--active'
                : 'navigation-link'
            }
          >
            <Icon size={22} strokeWidth={1.8} />
            <span>{item.label}</span>
          </NavLink>
        )
      })}
    </nav>
  )
}

export function NavigationMenu({ onNavigate }) {
  const navigate = useNavigate()

  function handleLogout() {
    onNavigate?.()
    clearSession()
    navigate('/login', { replace: true })
  }

  return (
    <div className="drawer__content">
      <nav className="drawer__links" aria-label="Navigasi aplikasi">
        <NavigationLinks onNavigate={onNavigate} />
      </nav>

      <div className="drawer__logout">
        <Button
          variant="danger"
          className="drawer__logout-button"
          onClick={handleLogout}
        >
          <LogOut size={18} />
          Keluar
        </Button>
      </div>
    </div>
  )
}