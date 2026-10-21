import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../components/Card.jsx'
import { EmptyState } from '../components/EmptyState.jsx'

export default function EmptyErrorPage() {
  const [activeTab, setActiveTab] = useState('empty')

  return (
    <section className="page-section" aria-labelledby="empty-error-title">
      <div className="preview-card__header">
        <div>
          <h1 id="empty-error-title">Keadaan Kosong & Error</h1>
          <p>
            Rujukan penanganan kondisi sistem ketika data nihil atau terjadi
            kendala operasional.
          </p>
        </div>
        <Link to="/dashboard" className="button button--secondary">
          Dashboard
        </Link>
      </div>

      <div className="tasks-toolbar__filters empty-error-tabs">
        <button
          type="button"
          className={`filter-chip ${activeTab === 'empty' ? 'filter-chip--active' : ''}`}
          aria-pressed={activeTab === 'empty'}
          onClick={() => setActiveTab('empty')}
        >
          Kondisi Data Kosong (Empty State)
        </button>
        <button
          type="button"
          className={`filter-chip ${activeTab === 'error' ? 'filter-chip--active' : ''}`}
          aria-pressed={activeTab === 'error'}
          onClick={() => setActiveTab('error')}
        >
          Kondisi Galat (Error State)
        </button>
      </div>

      {activeTab === 'empty' ? (
        <Card className="form-card">
          <EmptyState
            title="Belum Ada Tugas yang Ditemukan"
            description="Tidak ada data tugas yang sesuai dengan filter atau kata kunci pencarian yang Anda masukkan."
            actionLabel="Tambah Tugas Baru"
            actionTo="/tasks/new"
          />
        </Card>
      ) : (
        <Card className="form-card">
          <div className="empty-state empty-state--error">
            <div className="empty-state__icon empty-state__icon--error" aria-hidden="true">
              !
            </div>
            <h2>Terjadi Kendala Memuat Data</h2>
            <p className="empty-state__error-text">
              Data tidak dapat diproses atau format data lokal tidak valid.
              Silakan lakukan refresh atau reset data melalui menu Pengaturan.
            </p>
            <div className="reference-row empty-state__actions">
              <Link to="/tasks" className="button button--primary">
                Kembali ke Tugas
              </Link>
              <Link to="/settings" className="button button--secondary">
                Buka Pengaturan
              </Link>
            </div>
          </div>
        </Card>
      )}
    </section>
  )
}
