import { useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { EmptyState } from '../components/EmptyState.jsx'
import { PriorityBadge } from '../components/PriorityBadge.jsx'
import { StatusBadge } from '../components/StatusBadge.jsx'
import { getTasks } from '../store/tasks.js'
import { formatDate } from '../utils/formatDate.js'

const STATUS_FILTERS = [
  'Semua',
  'Belum Dikerjakan',
  'Sedang Dikerjakan',
  'Selesai Dikerjakan',
]

export default function TasksPage() {
  const location = useLocation()
  const [tasks] = useState(() => getTasks())
  const [searchTerm, setSearchTerm] = useState('')
  const [activeFilter, setActiveFilter] = useState('Semua')
  const [feedback, setFeedback] = useState(() => location.state?.message || '')

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchStatus =
        activeFilter === 'Semua' || task.status === activeFilter
      const query = searchTerm.toLowerCase().trim()
      const matchSearch =
        !query ||
        task.title.toLowerCase().includes(query) ||
        task.course.toLowerCase().includes(query)

      return matchStatus && matchSearch
    })
  }, [tasks, activeFilter, searchTerm])

  return (
    <section className="page-section" aria-labelledby="tasks-page-title">
      <div className="preview-card__header">
        <div>
          <h1 id="tasks-page-title">Semua Tugas</h1>
          <p>Pantau tenggat waktu dan kenali prioritas tugas akademik Anda.</p>
        </div>
        <Link to="/tasks/new" className="button button--primary">
          + Tambah Tugas
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

      <div className="tasks-toolbar">
        <div className="tasks-toolbar__search">
          <label htmlFor="search-task" className="sr-only">
            Cari Tugas atau Mata Kuliah
          </label>
          <input
            id="search-task"
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari tugas atau mata kuliah..."
            aria-label="Cari tugas atau mata kuliah"
          />
        </div>

        <div
          className="tasks-toolbar__filters"
          role="group"
          aria-label="Filter status tugas"
        >
          {STATUS_FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`filter-chip ${activeFilter === filter ? 'filter-chip--active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {tasks.length === 0 ? (
        <EmptyState
          title="Belum Ada Tugas"
          description="Daftar tugas Anda masih kosong. Catat tugas kuliah pertama Anda sekarang."
          actionLabel="Tambah Tugas"
          actionTo="/tasks/new"
        />
      ) : filteredTasks.length === 0 ? (
        <EmptyState
          title="Tugas Tidak Ditemukan"
          description={`Tidak ada tugas yang sesuai dengan kriteria "${searchTerm || activeFilter}".`}
          actionLabel="Tampilkan Semua Tugas"
          onAction={() => {
            setSearchTerm('')
            setActiveFilter('Semua')
          }}
        />
      ) : (
        <div className="tasks-grid">
          {filteredTasks.map((task) => (
            <article key={task.id} className="task-card">
              <span className="task-card__course">{task.course}</span>
              <h2 className="task-card__title">{task.title}</h2>

              <div className="task-card__meta">
                <span>Deadline: {formatDate(task.deadline)}</span>
                <span>Kesulitan: {task.difficulty}</span>
                {task.estimatedTime ? (
                  <span>Estimasi: {task.estimatedTime}</span>
                ) : null}
              </div>

              <div className="preview-card__actions">
                <div className="task-card__badges">
                  <StatusBadge status={task.status} />
                  <PriorityBadge priority={task.priority} />
                </div>
                <Link to={`/tasks/${task.id}`} className="text-link">
                  Lihat Detail →
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
