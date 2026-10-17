import { Link, Outlet, useLocation } from 'react-router-dom'

function PublicFooter() {
  return (
    <footer className="shared-footer">
      <Link to="/" className="shared-brand" aria-label="Priori beranda">
        <img src="/assets/priori_logo.svg" alt="" />
        <span>priori<span className="shared-brand__dot">.</span></span>
      </Link>
      <p>&copy; 2026 Kelompok 19. All rights reserved.</p>
    </footer>
  )
}

export function PublicLayout() {
  const { pathname } = useLocation()
  const isLandingPage = pathname === '/'

  return (
    <div className={`public-layout${isLandingPage ? ' public-layout--landing' : ''}`}>
      {!isLandingPage && (
        <header className="shared-navbar">
          <Link to="/" className="shared-brand" aria-label="Priori beranda">
            <img src="/assets/priori_logo.svg" alt="" />
            <span>priori<span className="shared-brand__dot">.</span></span>
          </Link>
          <nav aria-label="Navigasi publik">
            <Link to="/" className={pathname === '/' ? 'shared-nav__active' : ''}>Beranda</Link>
            <Link to="/login" className={pathname === '/login' ? 'shared-nav__active' : ''}>Login</Link>
            <Link to="/register" className={`shared-nav__register${pathname === '/register' ? ' shared-nav__register--active' : ''}`}>Registrasi</Link>
          </nav>
        </header>
      )}
      <main className={`public-main${isLandingPage ? ' public-main--landing' : ''}`}>
        <Outlet />
      </main>
      {!isLandingPage && <PublicFooter />}
    </div>
  )
}
