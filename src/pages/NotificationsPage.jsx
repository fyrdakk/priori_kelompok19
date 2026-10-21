import { useMemo, useSyncExternalStore } from 'react'
import { Link } from 'react-router-dom'
import { EmptyState } from '../components/EmptyState.jsx'
import { getTasksSnapshot, subscribeTasks } from '../store/tasks.js'
import { getTaskNotifications } from '../utils/notifications.js'

export default function NotificationsPage() {
  const tasks = useSyncExternalStore(subscribeTasks, getTasksSnapshot, () => [])
  const notifications = useMemo(() => getTaskNotifications(tasks), [tasks])

  return (
    <section className="page-section" aria-labelledby="notif-page-title">
      <div className="preview-card__header">
        <div>
          <h1 id="notif-page-title">Notifikasi Pengingat</h1>
          <p className="page-intro">
            Pengingat tenggat waktu tugas (Terlambat, H-1, H-3) yang dihitung
            saat halaman ini dibuka.
          </p>
        </div>
        <Link to="/tasks" className="button button--secondary">
          Semua Tugas
        </Link>
      </div>

      {notifications.length === 0 ? (
        <EmptyState
          title="Tidak Ada Pengingat Deadline"
          description="Semua tugas dalam kondisi aman! Tidak ada tugas yang terlambat atau mendekati batas deadline saat ini."
          actionLabel="Buka Semua Tugas"
          actionTo="/tasks"
        />
      ) : (
        <div
          className="notif-list"
          role="region"
          aria-label="Daftar pengingat tugas"
        >
          {notifications.map((notif) => {
            const isDanger = notif.urgency === 'danger'
            const badgeClass = isDanger
              ? 'priority-badge--high'
              : 'priority-badge--medium'
            const cardClass = isDanger
              ? 'notif-card notif-card--danger'
              : 'notif-card notif-card--warning'

            return (
              <article key={notif.id} className={cardClass}>
                <div className="notif-card__content">
                  <div className="task-card__badges">
                    <span className={`priority-badge ${badgeClass}`}>
                      {notif.label}
                    </span>
                    <span className="notif-card__course">{notif.course}</span>
                  </div>
                  <h2 className="notif-card__title">{notif.taskTitle}</h2>
                  <p className="notif-card__message">{notif.message}</p>
                </div>
                <div>
                  <Link
                    to={`/tasks/${notif.taskId}`}
                    className="button button--secondary"
                  >
                    Lihat Tugas →
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      )}
    </section>
  )
}
