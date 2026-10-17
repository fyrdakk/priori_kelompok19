import { Link } from 'react-router-dom'
import '../styles/landing.css'

function IndexPage() {
  return (
    <div className="landing-page">
      <header className="landing-nav">
        <Link to="/" className="landing-brand" aria-label="Priori beranda">
          <img src="/assets/priori_logo.svg" alt="" />
          <span>priori<span>.</span></span>
        </Link>
        <nav aria-label="Navigasi utama">
          <Link to="/" className="landing-nav-home">Beranda</Link>
          <Link className="landing-nav-login" to="/login">Login</Link>
          <Link className="landing-nav-register" to="/register">Registrasi</Link>
        </nav>
      </header>

      <main>
        <section className="landing-hero" id="tentang">
          <div className="landing-copy">
            <span className="landing-eyebrow"><span /> SMART PRIORITY TASK</span>
            <h1>Atur tugasmu.<br /><span>Raih tujuanmu.</span></h1>
            <p className="landing-description">Tugas kuliah menumpuk? Saatnya mengatur semuanya dengan lebih mudah. Priori membantumu memantau deadline, menentukan prioritas, dan menyelesaikan tugas dengan lebih terarah.</p>
            <div className="landing-actions">
              <Link className="landing-button landing-button-primary" to="/register">Mulai Sekarang <span aria-hidden="true">→</span></Link>
              <Link className="landing-button landing-button-secondary" to="/login">Sudah Punya Akun?</Link>
            </div>
            <div className="landing-benefits"><span>✓ Kelola tugas lebih rapi</span><span>✓ Pantau deadline</span></div>
          </div>

          <div className="landing-visual" aria-label="Ilustrasi dashboard Priori">
            <div className="landing-orb landing-orb-one" />
            <div className="landing-orb landing-orb-two" />
            <div className="dashboard-preview">
              <div className="preview-topbar"><div className="preview-brand"><img src="/assets/priori_logo.svg" alt="" /><strong>Dashboard Priori</strong></div><span className="preview-avatar">M</span></div>
              <div className="preview-content">
                <div className="preview-heading"><div><small>RINGKASAN AKTIVITAS</small><h2>Dashboard</h2><p>Hai, Mahasiswa! Siap produktif hari ini?</p></div><span className="preview-date">Hari ini</span></div>
                <div className="preview-stats">
                  <div><small>Total Tugas</small><strong>12</strong><span>Semua tugasmu</span></div>
                  <div><small>Selesai</small><strong>05</strong><span className="preview-green">Tugas tuntas</span></div>
                  <div><small>Berjalan</small><strong>04</strong><span>Sedang dikerjakan</span></div>
                </div>
                <div className="preview-task-list">
                  <div className="preview-list-heading"><strong>Daftar Tugas</strong><span>Prioritas minggu ini</span></div>
                  <div className="preview-task"><span className="preview-task-icon icon-blue">⌘</span><div><strong>Proyek Pemrograman Web</strong><small>Pengembangan aplikasi</small></div><span className="preview-badge badge-high">Tinggi</span></div>
                  <div className="preview-task"><span className="preview-task-icon icon-purple">▤</span><div><strong>Laporan Machine Learning</strong><small>Tugas individu</small></div><span className="preview-badge badge-medium">Sedang</span></div>
                  <div className="preview-task"><span className="preview-task-icon icon-green">✓</span><div><strong>Rangkuman Materi</strong><small>Catatan perkuliahan</small></div><span className="preview-badge badge-low">Rendah</span></div>
                </div>
                <div className="preview-progress"><div><span>Progres produktivitas</span><strong>65%</strong></div><span className="preview-progress-track"><span /></span><small>Terus lanjutkan progresmu!</small></div>
              </div>
            </div>
            <div className="landing-floating"><span>✓</span><div><strong>Keep it organized!</strong><small>Selangkah lebih produktif</small></div></div>
          </div>
        </section>

        <section className="landing-features" id="fitur">
          <div className="landing-section-heading"><span>KENAPA PRIORI?</span><h2>Belajar lebih teratur, mulai dari sini.</h2><p>Semua yang kamu butuhkan untuk mengelola tugas kuliah dalam satu tempat.</p></div>
          <div className="landing-feature-grid">
            <article><span className="feature-icon">▤</span><h3>Kelola Tugas</h3><p>Catat dan pantau tugas kuliah agar tidak ada yang terlewat.</p></article>
            <article><span className="feature-icon">◷</span><h3>Ingat Deadline</h3><p>Kenali tenggat waktu dan susun pekerjaan dengan lebih terarah.</p></article>
            <article><span className="feature-icon">↗</span><h3>Tentukan Prioritas</h3><p>Fokus pada tugas yang perlu diselesaikan lebih dahulu.</p></article>
          </div>
        </section>
      </main>

      <footer className="landing-footer"><Link to="/" className="landing-brand"><img src="/assets/priori_logo.svg" alt="" /><span>priori<span>.</span></span></Link><p>&copy; 2026 Kelompok 19. All rights reserved.</p></footer>
    </div>
  )
}

export default IndexPage
