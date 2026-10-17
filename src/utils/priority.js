export const PRIORITY_LEVELS = {
  HIGH: 'Tinggi',
  MEDIUM: 'Sedang',
  LOW: 'Rendah',
}

export const DIFFICULTY_LEVELS = ['Mudah', 'Sedang', 'Sulit']
export const TASK_STATUSES = [
  'Belum Dikerjakan',
  'Sedang Dikerjakan',
  'Selesai Dikerjakan',
]

/**
 * Menghitung tingkat prioritas tugas berdasarkan deadline dan tingkat kesulitan.
 * @param {Object} task
 * @param {string|Date} [referenceDate] Tanggal rujukan untuk perhitungan (default: hari ini)
 * @returns {'Tinggi' | 'Sedang' | 'Rendah'}
 */
export function calculatePriority(task, referenceDate = new Date()) {
  if (!task) return PRIORITY_LEVELS.LOW

  if (task.status === 'Selesai Dikerjakan') {
    return PRIORITY_LEVELS.LOW
  }

  if (!task.deadline) {
    return task.difficulty === 'Sulit'
      ? PRIORITY_LEVELS.MEDIUM
      : PRIORITY_LEVELS.LOW
  }

  const deadlineDate = new Date(task.deadline)
  if (isNaN(deadlineDate.getTime())) {
    return PRIORITY_LEVELS.MEDIUM
  }

  const ref = new Date(referenceDate)
  const refZero = new Date(ref.getFullYear(), ref.getMonth(), ref.getDate())
  const targetZero = new Date(
    deadlineDate.getFullYear(),
    deadlineDate.getMonth(),
    deadlineDate.getDate(),
  )

  const diffTime = targetZero.getTime() - refZero.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  // Terlambat atau jatuh tempo hari ini s.d H+2 -> Prioritas Tinggi
  if (diffDays <= 2) {
    return PRIORITY_LEVELS.HIGH
  }

  // Jatuh tempo 3 - 4 hari (H-3 atau H-4)
  if (diffDays <= 4) {
    return task.difficulty === 'Sulit'
      ? PRIORITY_LEVELS.HIGH
      : PRIORITY_LEVELS.MEDIUM
  }

  // Jatuh tempo 5 - 7 hari
  if (diffDays <= 7) {
    return task.difficulty === 'Sulit'
      ? PRIORITY_LEVELS.MEDIUM
      : PRIORITY_LEVELS.LOW
  }

  // Jatuh tempo lebih dari 7 hari
  return task.difficulty === 'Sulit'
    ? PRIORITY_LEVELS.MEDIUM
    : PRIORITY_LEVELS.LOW
}
