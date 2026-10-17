import { Link, useLocation } from 'react-router-dom'

export default function SuccessPage() {
  const location = useLocation()
  const title = location.state?.title || 'Tugas Berhasil Disimpan!'
  const message =
    location.state?.message ||
    'Data tugas Anda telah berhasil dicatat dan diperbarui ke dalam sistem Priori.'

  return (
    <section className="page-section" aria-labelledby="success-page-title">
      <div className="success-page-card">
        <div className="success-badge-circle" aria-hidden="true">
          <div className="success-badge-inner">✓</div>
        </div>

        <h1 id="success-page-title">{title}</h1>
        <p style={{ color: 'var(--color-text-muted)', maxWidth: '24rem' }}>
          {message}
        </p>

        <div
          className="reference-row"
          style={{ marginTop: 'var(--space-6)', justifyContent: 'center' }}
        >
          <Link to="/tasks" className="button button--primary">
            Lihat Semua Tugas
          </Link>
          <Link to="/dashboard" className="button button--secondary">
            Buka Dashboard
          </Link>
        </div>
      </div>
    </section>
  )
}
