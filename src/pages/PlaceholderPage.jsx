import AppNavigation from '../components/AppNavigation.jsx'

function PlaceholderPage() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <p className="brand">Priori</p>
        <AppNavigation />
      </header>
      <main className="placeholder" id="main-content">
        <p className="eyebrow">Modul 7 · Kelompok 19</p>
        <h1>Ruang untuk tugas yang lebih teratur.</h1>
        <p>
          Fondasi aplikasi Priori sudah siap. Halaman fitur akan dibangun pada
          fase berikutnya.
        </p>
      </main>
    </div>
  )
}

export default PlaceholderPage
