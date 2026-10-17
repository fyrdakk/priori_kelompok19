<<<<<<< HEAD
import { Link, NavLink } from 'react-router-dom'
import { Button } from './Button.jsx'
import { appNavigation } from './navigation.js'
import { useNavigate } from 'react-router-dom'
=======
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Menu, X, LayoutDashboard, ClipboardList, Bell, Settings, LogOut } from 'lucide-react'
import { Button } from './Button.jsx'
import { appNavigation } from './navigation.js'
>>>>>>> update
import { clearSession } from '../store/auth.js'

function NavigationLinks({ onNavigate }) {
  return appNavigation.map((item) => (
    <NavLink
      key={item.to}
      to={item.to}
      onClick={onNavigate}
      className={({ isActive }) =>
<<<<<<< HEAD
        isActive ? 'navigation-link navigation-link--active' : 'navigation-link'
=======
        isActive
          ? 'navigation-link navigation-link--active'
          : 'navigation-link'
>>>>>>> update
      }
    >
      {item.label}
    </NavLink>
  ))
}

<<<<<<< HEAD
export function Navbar({ onMenuOpen }) {
=======
export function Navbar({ onMenuOpen, menuOpen = false }) {
>>>>>>> update
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
<<<<<<< HEAD
        <img src="/assets/priori_logo.svg" alt="Priori" />
      </Link>
      <nav className="app-navbar__links" aria-label="Navigasi aplikasi">
        <NavigationLinks />
      </nav>
      <Button
        variant="secondary"
        className="logout-button"
        onClick={handleLogout}
      >
        Keluar
      </Button>
      <Button
        className="menu-button"
        variant="icon"
        aria-label="Buka navigasi"
        onClick={onMenuOpen}
      >
        ☰
      </Button>
=======
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
        onClick={onMenuOpen}
      >
        {menuOpen ? <X size={23} /> : <Menu size={23} />}
      </button>
>>>>>>> update
    </header>
  )
}

const BOTTOM_ITEMS = [
  {
    to: '/dashboard',
    label: 'Beranda',
<<<<<<< HEAD
    icon: 'M3 11l9-7 9 7M5 10v10h5v-6h4v6h5V10',
  },
  { to: '/tasks', label: 'Tugas', icon: 'M5 13l4 4 10-10' },
  {
    to: '/notifications',
    label: 'Notifikasi',
    icon: 'M18 8a6 6 0 1 0-12 0c0 6-2 7-2 9h16c0-2-2-3-2-9M10 20h4',
=======
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
>>>>>>> update
  },
  {
    to: '/settings',
    label: 'Pengaturan',
<<<<<<< HEAD
    icon: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM4 12h2m12 0h2M12 4v2m0 12v2M6.3 6.3l1.4 1.4m8.6 8.6 1.4 1.4m0-11.4-1.4 1.4M7.7 16.3l-1.4 1.4',
=======
    icon: Settings,
>>>>>>> update
  },
]

export function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Navigasi bawah">
<<<<<<< HEAD
      {BOTTOM_ITEMS.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            isActive
              ? 'navigation-link navigation-link--active'
              : 'navigation-link'
          }
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d={item.icon} />
          </svg>
          {item.label}
        </NavLink>
      ))}
=======
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
>>>>>>> update
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
<<<<<<< HEAD
      <div
        style={{
          marginTop: 'var(--space-6)',
          borderTop: '1px solid var(--color-border)',
          paddingTop: 'var(--space-4)',
        }}
      >
=======

      <div className="drawer__logout">
>>>>>>> update
        <Button
          variant="danger"
          style={{ width: '100%' }}
          onClick={handleLogout}
        >
<<<<<<< HEAD
          Keluar (Logout)
=======
          <LogOut size={18} />
          Keluar
>>>>>>> update
        </Button>
      </div>
    </div>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> update
