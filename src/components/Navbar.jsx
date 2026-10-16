import { Link, NavLink } from 'react-router-dom'
import { Button } from './Button.jsx'
import { appNavigation } from './navigation.js'
import { useNavigate } from 'react-router-dom'
import { clearSession } from '../store/auth.js'

function NavigationLinks({ onNavigate }) {
  return appNavigation.map((item) => (
    <NavLink
      key={item.to}
      to={item.to}
      onClick={onNavigate}
      className={({ isActive }) =>
        isActive ? 'navigation-link navigation-link--active' : 'navigation-link'
      }
    >
      {item.label}
    </NavLink>
  ))
}

export function Navbar({ onMenuOpen }) {
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
    </header>
  )
}

const BOTTOM_ITEMS = [
  {
    to: '/dashboard',
    label: 'Beranda',
    icon: 'M3 11l9-7 9 7M5 10v10h5v-6h4v6h5V10',
  },
  { to: '/tasks', label: 'Tugas', icon: 'M5 13l4 4 10-10' },
  {
    to: '/notifications',
    label: 'Notifikasi',
    icon: 'M18 8a6 6 0 1 0-12 0c0 6-2 7-2 9h16c0-2-2-3-2-9M10 20h4',
  },
  {
    to: '/settings',
    label: 'Pengaturan',
    icon: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM4 12h2m12 0h2M12 4v2m0 12v2M6.3 6.3l1.4 1.4m8.6 8.6 1.4 1.4m0-11.4-1.4 1.4M7.7 16.3l-1.4 1.4',
  },
]

export function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Navigasi bawah">
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
      <div
        style={{
          marginTop: 'var(--space-6)',
          borderTop: '1px solid var(--color-border)',
          paddingTop: 'var(--space-4)',
        }}
      >
        <Button
          variant="danger"
          style={{ width: '100%' }}
          onClick={handleLogout}
        >
          Keluar (Logout)
        </Button>
      </div>
    </div>
  )
}
