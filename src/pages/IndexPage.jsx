import { Link } from 'react-router-dom'

function IndexPage() {
  return (
    <section className="auth-page auth-page--index">
      <p className="eyebrow">Smart Priority Task</p>
      <h1>Selamat Datang di Priori</h1>
      <p className="page-intro">
        Catat tugas kuliah, pantau deadline, dan tentukan prioritasmu dalam satu
        ruang yang lebih teratur.
      </p>
      <div className="auth-actions">
        <Link className="button button--primary" to="/login">
          Masuk
        </Link>
        <Link className="button button--secondary" to="/register">
          Buat Akun
        </Link>
      </div>
      <p className="simulation-note">
        Login dan registrasi adalah simulasi lokal untuk prototipe. Password
        disimpan di browser dan tidak aman untuk produksi.
      </p>
    </section>
  )
}

export default IndexPage
