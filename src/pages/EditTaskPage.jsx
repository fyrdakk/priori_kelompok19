import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button } from '../components/Button.jsx'
import { Card } from '../components/Card.jsx'
import { EmptyState } from '../components/EmptyState.jsx'
import { Input } from '../components/Input.jsx'
import { Select } from '../components/Select.jsx'
import { Textarea } from '../components/Textarea.jsx'
import { getTaskById, updateTask } from '../store/tasks.js'
import { DIFFICULTY_LEVELS, TASK_STATUSES } from '../utils/priority.js'
import { isTaskValid, validateTask } from '../utils/taskValidation.js'

export default function EditTaskPage() {
  const { taskId } = useParams()
  const navigate = useNavigate()
  const initialTask = getTaskById(taskId)

  const [values, setValues] = useState(() => ({
    course: initialTask?.course || '',
    title: initialTask?.title || '',
    deadline: initialTask?.deadline || '',
    difficulty: initialTask?.difficulty || 'Sedang',
    status: initialTask?.status || 'Belum Dikerjakan',
    estimatedTime: initialTask?.estimatedTime || '',
    description: initialTask?.description || '',
  }))

  const [errors, setErrors] = useState({})
  const [formError, setFormError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!initialTask) {
    return (
      <section className="page-section">
        <EmptyState
          title="Tugas Tidak Ditemukan"
          description="Tugas yang ingin Anda edit tidak ditemukan atau telah dihapus."
          actionLabel="Kembali ke Semua Tugas"
          actionTo="/tasks"
        />
      </section>
    )
  }

  const handleChange = (field) => (event) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }))
    setFormError('')
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }))
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validationErrors = validateTask(values)
    setErrors(validationErrors)

    if (!isTaskValid(validationErrors)) {
      return
    }

    setIsSubmitting(true)
    const updatedTask = updateTask(taskId, values)
    if (!updatedTask) {
      setIsSubmitting(false)
      setFormError(
        'Perubahan tidak dapat disimpan. Periksa kapasitas penyimpanan browser Anda.',
      )
      return
    }
    navigate('/success', {
      state: {
        title: 'Tugas Berhasil Diperbarui!',
        message: `Perubahan tugas "${updatedTask.title}" berhasil disimpan.`,
      },
    })
  }

  return (
    <section
      className="page-section page-section--narrow"
      aria-labelledby="edit-task-title"
    >
      <div className="preview-card__header">
        <div>
          <h1 id="edit-task-title">Edit Tugas</h1>
          <p>Perbarui informasi lengkap tugas akademik Anda.</p>
        </div>
        <Link to={`/tasks/${taskId}`} className="button button--secondary">
          Batal
        </Link>
      </div>

      <Card className="form-card">
        <form onSubmit={handleSubmit} noValidate>
          <Input
            id="course"
            label="Mata Kuliah *"
            value={values.course}
            onChange={handleChange('course')}
            error={errors.course}
            required
          />

          <Input
            id="title"
            label="Judul Tugas *"
            value={values.title}
            onChange={handleChange('title')}
            error={errors.title}
            required
          />

          <Input
            id="deadline"
            type="date"
            label="Deadline *"
            value={values.deadline}
            onChange={handleChange('deadline')}
            error={errors.deadline}
            required
          />

          <Select
            id="difficulty"
            label="Tingkat Kesulitan *"
            value={values.difficulty}
            onChange={handleChange('difficulty')}
            error={errors.difficulty}
            required
          >
            {DIFFICULTY_LEVELS.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </Select>

          <Select
            id="status"
            label="Status Tugas"
            value={values.status}
            onChange={handleChange('status')}
          >
            {TASK_STATUSES.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </Select>

          <Input
            id="estimatedTime"
            label="Estimasi Waktu Pengerjaan (Opsional)"
            placeholder="Contoh: 3 Jam, 2 Hari"
            value={values.estimatedTime}
            onChange={handleChange('estimatedTime')}
          />

          <Textarea
            id="description"
            label="Deskripsi / Catatan Tugas"
            placeholder="Tambahkan catatan khusus atau instruksi..."
            value={values.description}
            onChange={handleChange('description')}
          />
          {formError ? <p className="form-error" role="alert">{formError}</p> : null}

          <div
            className="reference-row"
            style={{ marginTop: 'var(--space-6)' }}
          >
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Menyimpan...' : 'Simpan Perubahan'}
            </Button>
            <Link to={`/tasks/${taskId}`} className="button button--secondary">
              Batal
            </Link>
          </div>
        </form>
      </Card>
    </section>
  )
}
