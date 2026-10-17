import { DIFFICULTY_LEVELS } from './priority.js'

export function validateCourse(value) {
  return value && value.trim() ? '' : 'Mata kuliah wajib diisi.'
}

export function validateTitle(value) {
  return value && value.trim() ? '' : 'Judul tugas wajib diisi.'
}

export function validateDeadline(value) {
  if (!value || !value.trim()) return 'Deadline wajib diisi.'
  const date = new Date(value)
  return isNaN(date.getTime()) ? 'Format deadline tidak valid.' : ''
}

export function validateDifficulty(value) {
  if (!value || !value.trim()) return 'Tingkat kesulitan wajib dipilih.'
  return DIFFICULTY_LEVELS.includes(value)
    ? ''
    : 'Tingkat kesulitan harus Mudah, Sedang, atau Sulit.'
}

export function validateTask(values) {
  return {
    course: validateCourse(values.course),
    title: validateTitle(values.title),
    deadline: validateDeadline(values.deadline),
    difficulty: validateDifficulty(values.difficulty),
  }
}

export function isTaskValid(errors) {
  return (
    !errors.course && !errors.title && !errors.deadline && !errors.difficulty
  )
}
