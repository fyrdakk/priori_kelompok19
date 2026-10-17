import { describe, expect, it } from 'vitest'
import { isTaskValid, validateTask } from './taskValidation.js'

describe('validateTask', () => {
  it('memberikan pesan error jika field wajib kosong', () => {
    const emptyValues = {
      course: '',
      title: '',
      deadline: '',
      difficulty: '',
    }
    const errors = validateTask(emptyValues)
    expect(errors.course).toBe('Mata kuliah wajib diisi.')
    expect(errors.title).toBe('Judul tugas wajib diisi.')
    expect(errors.deadline).toBe('Deadline wajib diisi.')
    expect(errors.difficulty).toBe('Tingkat kesulitan wajib dipilih.')
    expect(isTaskValid(errors)).toBe(false)
  })

  it('mengembalikan string kosong jika input valid', () => {
    const validValues = {
      course: 'UI/UX Design',
      title: 'Membuat Wireframe',
      deadline: '2026-10-25',
      difficulty: 'Sedang',
    }
    const errors = validateTask(validValues)
    expect(errors.course).toBe('')
    expect(errors.title).toBe('')
    expect(errors.deadline).toBe('')
    expect(errors.difficulty).toBe('')
    expect(isTaskValid(errors)).toBe(true)
  })

  it('menolak tingkat kesulitan yang di luar pilihan yang valid', () => {
    const values = {
      course: 'Algoritma',
      title: 'Tugas 1',
      deadline: '2026-10-25',
      difficulty: 'Sangat Sulit',
    }
    const errors = validateTask(values)
    expect(errors.difficulty).toBe(
      'Tingkat kesulitan harus Mudah, Sedang, atau Sulit.',
    )
  })
})
