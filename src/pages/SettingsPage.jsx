import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button.jsx'
import { Card } from '../components/Card.jsx'
import { Modal } from '../components/Modal.jsx'
import { resetTasks } from '../store/tasks.js'

export default function SettingsPage() {
  const [feedback, setFeedback] = useState('')
  const [isResetModalOpen, setIsResetModalOpen] = useState(false)

  const handleResetData = () => {
    resetTasks()
    setIsResetModalOpen(false)
    setFeedback('Data tugas berhasil direset ke contoh data awal (seed data).')
  }

  return (
    <section className="page-section" aria-labelledby="settings-title">
      <div className="preview-card__header">
        <div>
          <h1 id="settings-title">Pengaturan Aplikasi</h1>
<<<<<<< HEAD
          <p>Kelola preferensi dan data prototipe Priori di perangkat Anda.</p>
=======
          <p className="page-intro">Kelola preferensi dan data prototipe Priori di perangkat Anda.</p>
>>>>>>> update
        </div>
        <Link to="/dashboard" className="button button--secondary">
          Dashboard
        </Link>
      </div>

      {feedback ? (
        <div className="alert-banner alert-banner--success" role="status">
          <span>{feedback}</span>
          <button
            type="button"
            className="button button--icon"
            onClick={() => setFeedback('')}
            aria-label="Tutup notifikasi"
          >
            ×
          </button>
        </div>
      ) : null}

      <div className="reference-grid">
        <Card>
          <h2>Manajemen Data Demo</h2>
          <p>
            Jika Anda ingin mengembalikan daftar tugas ke kondisi semula untuk
            keperluan pengujian atau demonstrasi, Anda dapat menggunakan tombol
            reset di bawah ini.
          </p>
          <div style={{ marginTop: 'var(--space-4)' }}>
            <Button
              variant="secondary"
              onClick={() => setIsResetModalOpen(true)}
            >
              Reset Data Tugas ke Awal
            </Button>
          </div>
        </Card>

        <Card>
          <h2>Informasi Prototipe</h2>
          <div className="info-list">
            <div className="info-item">
              <span className="info-item__label">Versi Prototipe</span>
              <span className="info-item__value">0.1.0 (Modul 7 MVP)</span>
            </div>
            <div className="info-item">
              <span className="info-item__label">Penyimpanan</span>
              <span className="info-item__value">Browser LocalStorage</span>
            </div>
            <div className="info-item">
              <span className="info-item__label">Backend / Server</span>
              <span className="info-item__value">Tidak Ada (Simulasi)</span>
            </div>
            <div className="info-item">
              <span className="info-item__label">Push Notification</span>
              <span className="info-item__value">
                Terbatas (On-Demand saat dibuka)
              </span>
            </div>
          </div>
        </Card>
      </div>

      <Modal
        isOpen={isResetModalOpen}
        title="Reset Data Tugas"
        onClose={() => setIsResetModalOpen(false)}
      >
        <p>
          Apakah Anda yakin ingin mereset seluruh data tugas ke data contoh
          bawaan? Tugas yang baru Anda tambahkan atau ubah akan digantikan oleh
          seed data awal.
        </p>
        <div className="modal__actions">
          <Button
            variant="secondary"
            onClick={() => setIsResetModalOpen(false)}
          >
            Batal
          </Button>
          <Button variant="danger" onClick={handleResetData}>
            Ya, Reset Sekarang
          </Button>
        </div>
      </Modal>
    </section>
  )
}
