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
