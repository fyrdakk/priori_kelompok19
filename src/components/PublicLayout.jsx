import { Link, Outlet, useLocation } from 'react-router-dom'

function PublicFooter() {
  return (
    <footer className="shared-footer">
      <div className="footer-main">
        <div className="footer-brand-block">
          <Link to="/" className="shared-brand" aria-label="Priori beranda">
            <img src="/assets/priori_logo.svg" alt="" />
            <span>priori<span className="shared-brand__dot">.</span></span>
          </Link>
          <p>Ruang sederhana untuk tugas yang lebih terarah.</p>
        </div>
        <nav className="footer-links" aria-label="Tautan footer publik">
          <Link to="/">Beranda</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Registrasi</Link>
        </nav>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Kelompok 19</p>
        <span>Prototipe web · Modul 7</span>
      </div>
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
