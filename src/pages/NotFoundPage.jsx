import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="not-found">
      <p className="eyebrow">404</p>
      <h1>Halaman tidak ditemukan.</h1>
      <Link className="button button--primary" to="/">
        Kembali ke Indeks
      </Link>
    </main>
  )
}

export default NotFoundPage
