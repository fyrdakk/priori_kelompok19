import { useState, useSyncExternalStore } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button } from '../components/Button.jsx'
import { Card } from '../components/Card.jsx'
import { EmptyState } from '../components/EmptyState.jsx'
import { Modal } from '../components/Modal.jsx'
import { PriorityBadge } from '../components/PriorityBadge.jsx'
import { Select } from '../components/Select.jsx'
import { StatusBadge } from '../components/StatusBadge.jsx'
import {
  deleteTask,
  getTasksSnapshot,
  subscribeTasks,
  updateTaskStatus,
} from '../store/tasks.js'
import { TASK_STATUSES } from '../utils/priority.js'
import { formatDate } from '../utils/formatDate.js'

export default function TaskDetailPage() {
  const { taskId } = useParams()
  const navigate = useNavigate()
  const tasks = useSyncExternalStore(
    subscribeTasks,
    getTasksSnapshot,
    () => [],
  )
  const task = tasks.find((item) => String(item.id) === String(taskId)) || null
  const [statusDraft, setStatusDraft] = useState({
    taskId: null,
    value: '',
  })
  const [feedback, setFeedback] = useState('')
  const [feedbackType, setFeedbackType] = useState('success')
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const selectedStatus =
    statusDraft.taskId === taskId ? statusDraft.value : task?.status || ''

  if (!task) {
    return (
      <section className="page-section">
        <EmptyState
          title="Tugas Tidak Ditemukan"
          description="Tugas yang Anda cari mungkin telah dihapus atau tidak tersedia."
          actionLabel="Kembali ke Semua Tugas"
          actionTo="/tasks"
        />
      </section>
    )
  }

  const handleStatusChange = (event) => {
    setStatusDraft({ taskId, value: event.target.value })
  }

  const handleSaveStatus = async (event) => {
    event.preventDefault()
    if (selectedStatus === task.status) return

    try {
      const updated = await updateTaskStatus(task.id, selectedStatus)
      if (!updated) throw new Error('save_failed')
      setStatusDraft({ taskId, value: updated.status })
      setFeedbackType('success')
      setFeedback('Status tugas berhasil diperbarui.')
    } catch {
      setFeedbackType('error')
      setFeedback(
        'Status tidak dapat disimpan. Periksa koneksi atau konfigurasi database.',
      )
    }
  }

  const handleConfirmDelete = async () => {
    try {
      const success = await deleteTask(task.id)
      if (!success) throw new Error('delete_failed')
      navigate('/tasks', {
        state: { message: `Tugas "${task.title}" berhasil dihapus.` },
      })
      return
    } catch {
      setIsDeleteModalOpen(false)
      setFeedbackType('error')
      setFeedback(
        'Tugas tidak dapat dihapus. Periksa koneksi atau konfigurasi database.',
      )
    }
  }

  return (
    <section
      className="page-section page-section--narrow"
      aria-labelledby="task-detail-title"
    >
      <div className="preview-card__header">
        <div>
          <span className="card__eyebrow">{task.course}</span>
          <h1 id="task-detail-title">{task.title}</h1>
        </div>
        <Link to="/tasks" className="button button--secondary">
          ← Kembali ke Tugas
        </Link>
      </div>

      {feedback ? (
        <div
          className={`alert-banner alert-banner--${feedbackType}`}
          role={feedbackType === 'error' ? 'alert' : 'status'}
        >
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

      <div className="task-detail">
        <Card className="task-detail-card">
          <div className="preview-card__actions">
            <div className="task-card__badges">
              <StatusBadge status={task.status} />
              <PriorityBadge priority={task.priority} />
            </div>
          </div>

          <div className="task-detail__section">
            <h2 className="task-detail__section-title">
              Informasi Tenggat & Waktu
            </h2>
            <p>
              <strong>Deadline:</strong> {formatDate(task.deadline)}
            </p>
            <p>
              <strong>Tingkat Kesulitan:</strong> {task.difficulty}
            </p>
            {task.estimatedTime ? (
              <p>
                <strong>Estimasi Pengerjaan:</strong> {task.estimatedTime}
              </p>
            ) : null}
          </div>

          <div className="task-detail__section">
            <h2 className="task-detail__section-title">Deskripsi / Catatan</h2>
            <p>
              {task.description || 'Tidak ada catatan atau instruksi tambahan.'}
            </p>
          </div>

          <hr className="task-detail__divider" />

          {/* Ubah Status Terpisah */}
          <div className="task-detail__section">
            <h2 className="task-detail__section-title">
              Ubah Status Tugas Terpisah
            </h2>
            <form onSubmit={handleSaveStatus} className="reference-row">
              <div className="task-detail__status-field">
                <Select
                  id="quick-status"
                  label="Pilih Status Baru"
                  value={selectedStatus}
                  onChange={handleStatusChange}
                >
                  {TASK_STATUSES.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </Select>
              </div>
              <Button
                type="submit"
                variant="secondary"
                disabled={selectedStatus === task.status}
                className="task-detail__status-button"
              >
                Simpan Status
              </Button>
            </form>
          </div>

          <hr className="task-detail__divider2" />
          <h2 className="task-detail__section-title2">
            Tombol "Edit Semua Tugas" digunakan ketika ingin mengedit semua tugas, bukan menyimpan status tugas. Jika ingin menyimpan status tugas klik tombol "Simpan Status"
          </h2>
          
          {/* Aksi Utama */}
          <div className="task-detail__actions">
            <Link
              to={`/tasks/${task.id}/edit`}
              className="button button--primary"
            >
              Edit Semua Informasi
            </Link>
            <Button variant="danger" onClick={() => setIsDeleteModalOpen(true)}>
              Hapus Tugas
            </Button>
          </div>
        </Card>
      </div>

      {/* Modal Konfirmasi Hapus */}
      <Modal
        isOpen={isDeleteModalOpen}
        title="Hapus Tugas"
        onClose={() => setIsDeleteModalOpen(false)}
      >
        <p>
          Apakah Anda yakin ingin menghapus tugas{' '}
          <strong>&quot;{task.title}&quot;</strong>? Tindakan ini tidak dapat
          dibatalkan.
        </p>
        <div className="modal__actions">
          <Button
            variant="secondary"
            onClick={() => setIsDeleteModalOpen(false)}
          >
            Batal
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Ya, Hapus Tugas
          </Button>
        </div>
      </Modal>
    </section>
  )
}
