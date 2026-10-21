import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../components/Button.jsx'
import { Card } from '../components/Card.jsx'
import { Input } from '../components/Input.jsx'
import { Select } from '../components/Select.jsx'
import { Textarea } from '../components/Textarea.jsx'
import { createTask } from '../store/tasks.js'
import { DIFFICULTY_LEVELS, TASK_STATUSES } from '../utils/priority.js'
import { isTaskValid, validateTask } from '../utils/taskValidation.js'

export default function AddTaskPage() {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    course: '',
    title: '',
    deadline: '',
    difficulty: 'Sedang',
    status: 'Belum Dikerjakan',
    estimatedTime: '',
    description: '',
  })

  const [errors, setErrors] = useState({})
  const [formError, setFormError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

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
    const createdTask = createTask(values)
    if (!createdTask) {
      setIsSubmitting(false)
      setFormError(
        'Tugas tidak dapat disimpan. Periksa kapasitas penyimpanan browser Anda.',
      )
      return
    }
    navigate('/success', {
      state: {
        title: 'Tugas Berhasil Ditambahkan!',
        message: `Tugas "${createdTask.title}" berhasil dicatat.`,
      },
    })
  }

  return (
    <section
      className="page-section page-section--narrow"
      aria-labelledby="add-task-title"
    >
      <div className="preview-card__header">
        <div>
          <h1 id="add-task-title">Tambah Tugas</h1>
          <p>Catat tugas kuliah baru beserta deadline dan tingkat kesulitan.</p>
        </div>
        <Link to="/tasks" className="button button--secondary">
          ← Kembali
        </Link>
      </div>

      <Card className="form-card">
        <form onSubmit={handleSubmit} noValidate>
          <Input
            id="course"
            label="Mata Kuliah *"
            placeholder="Contoh: UI/UX Design, Algoritma"
            value={values.course}
            onChange={handleChange('course')}
            error={errors.course}
            required
          />

          <Input
            id="title"
            label="Judul Tugas *"
            placeholder="Contoh: Membuat Wireframe Aplikasi"
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
            placeholder="Tambahkan catatan khusus, tautan referensi, atau instruksi..."
            value={values.description}
            onChange={handleChange('description')}
          />
          {formError ? <p className="form-error" role="alert">{formError}</p> : null}

          <div className="reference-row form-actions">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Menyimpan...' : 'Simpan Tugas'}
            </Button>
            <Link to="/tasks" className="button button--secondary">
              Batal
            </Link>
          </div>
        </form>
      </Card>
    </section>
  )
}
