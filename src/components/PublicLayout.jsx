import { Link, Outlet } from 'react-router-dom'

export function PublicLayout() {
  return (
    <div className="public-layout">
      <header className="public-header">
        <Link
          to="/"
          className="brand brand--link"
          aria-label="Priori, ke Indeks"
        >
          <img src="/assets/priori_logo.svg" alt="Priori" />
        </Link>
        <nav aria-label="Navigasi publik">
          <Link to="/login">Login</Link>
          <Link to="/register">Registrasi</Link>
        </nav>
      </header>
      <main className="public-main">
        <Outlet />
      </main>
    </div>
  )
}
