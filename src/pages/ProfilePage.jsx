import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../components/Button.jsx'
import { Card } from '../components/Card.jsx'
import { Modal } from '../components/Modal.jsx'
import { clearSession, getSession } from '../store/auth.js'
import { getTasks } from '../store/tasks.js'

export default function ProfilePage() {
  const navigate = useNavigate()
  const session = getSession()
  const tasks = useMemo(() => getTasks(), [])
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)

  const completedCount = tasks.filter(
    (t) => t.status === 'Selesai Dikerjakan',
  ).length

  const handleLogout = () => {
    clearSession()
    navigate('/')
  }

  return (
    <section className="page-section" aria-labelledby="profile-title">
      <div className="preview-card__header">
        <div>
          <h1 id="profile-title">Profil Pengguna</h1>
          <p>Informasi akun dan ringkasan aktivitas akademik Anda di Priori.</p>
        </div>
        <Link to="/dashboard" className="button button--secondary">
          Dashboard
        </Link>
      </div>

      <div className="reference-grid">
        <Card>
          <h2>Data Akun</h2>
          <div className="info-list">
            <div className="info-item">
              <span className="info-item__label">Nama Lengkap</span>
              <span className="info-item__value">
                {session?.name || 'Mahasiswa Demo'}
              </span>
            </div>
            <div className="info-item">
              <span className="info-item__label">Email</span>
              <span className="info-item__value">
                {session?.email || 'demo@priori.test'}
              </span>
            </div>
            <div className="info-item">
              <span className="info-item__label">Status Akun</span>
              <span className="info-item__value">
                Simulasi Demo (localStorage)
              </span>
            </div>
            <div className="info-item">
              <span className="info-item__label">Peran</span>
              <span className="info-item__value">Mahasiswa Aktif</span>
            </div>
          </div>

          <div style={{ marginTop: 'var(--space-4)' }}>
            <Button variant="danger" onClick={() => setIsLogoutModalOpen(true)}>
              Keluar Akun (Logout)
            </Button>
          </div>
        </Card>

        <Card>
          <h2>Statistik Aktivitas</h2>
          <div className="info-list">
            <div className="info-item">
              <span className="info-item__label">Total Tugas Dicatat</span>
              <span className="info-item__value">{tasks.length} Tugas</span>
            </div>
            <div className="info-item">
              <span className="info-item__label">Tugas Terselesaikan</span>
              <span className="info-item__value">{completedCount} Selesai</span>
            </div>
            <div className="info-item">
              <span className="info-item__label">Tugas Menunggu</span>
              <span className="info-item__value">
                {tasks.length - completedCount} Tugas
              </span>
            </div>
          </div>
          <p
            style={{
              color: 'var(--color-text-muted)',
              fontSize: 'var(--font-size-xs)',
              marginTop: 'var(--space-4)',
            }}
          >
            * Data tersimpan aman di browser Anda. Tidak ada sinkronisasi
            eksternal ke server.
          </p>
        </Card>
      </div>

      <Modal
        isOpen={isLogoutModalOpen}
        title="Konfirmasi Keluar"
        onClose={() => setIsLogoutModalOpen(false)}
      >
        <p>
          Apakah Anda yakin ingin keluar dari sesi aplikasi? Anda dapat masuk
          kembali kapan saja.
        </p>
        <div className="modal__actions">
          <Button
            variant="secondary"
            onClick={() => setIsLogoutModalOpen(false)}
          >
            Batal
          </Button>
          <Button variant="danger" onClick={handleLogout}>
            Ya, Keluar
          </Button>
        </div>
      </Modal>
    </section>
  )
}
