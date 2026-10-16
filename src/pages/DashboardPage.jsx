import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { EmptyState } from '../components/EmptyState.jsx'
import { PriorityBadge } from '../components/PriorityBadge.jsx'
import { StatusBadge } from '../components/StatusBadge.jsx'
import { getSession } from '../store/auth.js'
import { getTasks } from '../store/tasks.js'

export default function DashboardPage() {
  const session = getSession()
  const userName = session?.name || 'Mahasiswa'
  const tasks = useMemo(() => getTasks(), [])

  const stats = useMemo(() => {
    const total = tasks.length
    const completed = tasks.filter(
      (t) => t.status === 'Selesai Dikerjakan',
    ).length
    const inProgress = tasks.filter(
      (t) => t.status === 'Sedang Dikerjakan',
    ).length
    const notStarted = tasks.filter(
      (t) => t.status === 'Belum Dikerjakan',
    ).length

    return { total, completed, inProgress, notStarted }
  }, [tasks])

  const attentionTasks = useMemo(() => {
    return tasks
      .filter((t) => t.status !== 'Selesai Dikerjakan')
      .sort((a, b) => {
        // Prioritaskan prioritas 'Tinggi' dulu
        const pOrder = { Tinggi: 1, Sedang: 2, Rendah: 3 }
        const diffP = (pOrder[a.priority] || 3) - (pOrder[b.priority] || 3)
        if (diffP !== 0) return diffP
        return new Date(a.deadline) - new Date(b.deadline)
      })
      .slice(0, 3)
  }, [tasks])

  return (
    <section className="page-section" aria-labelledby="dashboard-title">
      <div className="dashboard-hero">
        <h1 id="dashboard-title">Halo, {userName}!</h1>
        <p>Ayo atur tugasmu agar perkuliahan lebih terencana dan terkendali.</p>
      </div>

      <div
        className="stats-grid"
        role="region"
        aria-label="Ringkasan status tugas"
      >
        <div className="stat-card stat-card--total">
          <span className="stat-card__value">{stats.total}</span>
          <span className="stat-card__label">Total Tugas</span>
        </div>
        <div className="stat-card stat-card--done">
          <span className="stat-card__value">{stats.completed}</span>
          <span className="stat-card__label">Selesai</span>
        </div>
        <div className="stat-card stat-card--progress">
          <span className="stat-card__value">{stats.inProgress}</span>
          <span className="stat-card__label">Sedang Dikerjakan</span>
        </div>
        <div className="stat-card stat-card--pending">
          <span className="stat-card__value">{stats.notStarted}</span>
          <span className="stat-card__label">Belum Dikerjakan</span>
        </div>
      </div>

      <div className="dashboard-section">
        <div className="preview-card__header">
          <div>
            <h2>Tugas Perlu Perhatian</h2>
            <p>Daftar tugas dengan deadline terdekat atau prioritas tinggi.</p>
          </div>
          <div className="reference-row">
            <Link to="/tasks/new" className="button button--primary">
              + Tambah Tugas
            </Link>
            <Link to="/tasks" className="button button--secondary">
              Lihat Semua Tugas →
            </Link>
          </div>
        </div>

        {attentionTasks.length === 0 ? (
          <EmptyState
            title="Tidak Ada Tugas Mendesak"
            description="Semua tugas saat ini telah selesai atau belum ada tugas yang dicatat."
            actionLabel="Catat Tugas Baru"
            actionTo="/tasks/new"
          />
        ) : (
          <div className="tasks-grid">
            {attentionTasks.map((task) => (
              <article key={task.id} className="task-card">
                <span className="task-card__course">{task.course}</span>
                <h3 className="task-card__title">{task.title}</h3>
                <div className="task-card__meta">
                  <span>📅 Deadline: {task.deadline}</span>
                  <span>⚡ Kesulitan: {task.difficulty}</span>
                  {task.estimatedTime ? (
                    <span>⏱️ Estimasi: {task.estimatedTime}</span>
                  ) : null}
                </div>
                <div className="preview-card__actions">
                  <div className="task-card__badges">
                    <StatusBadge status={task.status} />
                    <PriorityBadge priority={task.priority} />
                  </div>
                  <Link to={`/tasks/${task.id}`} className="text-link">
                    Kelola Tugas →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
