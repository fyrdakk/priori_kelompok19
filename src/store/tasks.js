import { calculatePriority } from '../utils/priority.js'

const TASKS_STORAGE_KEY = 'priori.demo.tasks'
export const TASKS_CHANGED_EVENT = 'priori:tasks-changed'
let tasksSnapshot

function getInitialSeedTasks() {
  const now = new Date()
  const formatDate = (daysAhead) => {
    const d = new Date(now)
    d.setDate(d.getDate() + daysAhead)
    return d.toISOString().split('T')[0]
  }

  return [
    {
      id: 'task-1',
      title: 'Membuat Wireframe',
      course: 'UI/UX Design',
      deadline: formatDate(1), // H-1
      difficulty: 'Sedang',
      status: 'Belum Dikerjakan',
      estimatedTime: '3 Jam',
      description:
        'Buat wireframe lo-fi untuk aplikasi mobile sesuai hasil user research.',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'task-2',
      title: 'Laporan Praktikum Basis Data',
      course: 'Basis Data',
      deadline: formatDate(2), // H-2
      difficulty: 'Sulit',
      status: 'Sedang Dikerjakan',
      estimatedTime: '4 Jam',
      description:
        'Lakukan normalisasi tabel 1NF sampai 3NF dan buat relasi antar entitas.',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'task-3',
      title: 'Rangkuman Materi Komputasi Awan',
      course: 'Cloud Computing',
      deadline: formatDate(7),
      difficulty: 'Mudah',
      status: 'Selesai Dikerjakan',
      estimatedTime: '1.5 Jam',
      description:
        'Membaca dan merangkum modul arsitektur SaaS, PaaS, dan IaaS.',
      createdAt: new Date().toISOString(),
    },
  ]
}

function readStorage(key) {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return null
    return parsed.filter(isValidTask)
  } catch {
    return null
  }
}

function isValidTask(task) {
  return Boolean(
    task &&
      typeof task === 'object' &&
      !Array.isArray(task) &&
      typeof task.id === 'string' &&
      typeof task.title === 'string' &&
      typeof task.course === 'string' &&
      typeof task.deadline === 'string' &&
      typeof task.difficulty === 'string' &&
      typeof task.status === 'string',
  )
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch {
    return false
  }
}

function notifyTasksChanged() {
  tasksSnapshot = undefined
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event(TASKS_CHANGED_EVENT))
  }
}

export function subscribeTasks(listener) {
  if (typeof window === 'undefined') return () => {}
  const handleChange = () => {
    tasksSnapshot = undefined
    listener()
  }
  window.addEventListener(TASKS_CHANGED_EVENT, handleChange)
  window.addEventListener('storage', handleChange)
  return () => {
    window.removeEventListener(TASKS_CHANGED_EVENT, handleChange)
    window.removeEventListener('storage', handleChange)
  }
}

export function getTasksSnapshot() {
  if (!tasksSnapshot) tasksSnapshot = getTasks()
  return tasksSnapshot
}

/**
 * Mengambil semua tugas dari localStorage. Jika kosong, menginisialisasi dengan seed data.
 * Menghitung prioritas dinamis untuk tiap tugas.
 */
export function getTasks() {
  let tasks = readStorage(TASKS_STORAGE_KEY)
  if (!tasks) {
    tasks = getInitialSeedTasks()
    writeStorage(TASKS_STORAGE_KEY, tasks)
  }

  return tasks.map((task) => ({
    ...task,
    priority: calculatePriority(task),
  }))
}

/**
 * Mengambil satu tugas berdasarkan ID.
 */
export function getTaskById(id) {
  const tasks = getTasks()
  const found = tasks.find((t) => String(t.id) === String(id))
  return found || null
}

/**
 * Menambahkan tugas baru.
 */
export function createTask(data) {
  const tasks = getTasks()
  const newTask = {
    id: `task-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
    title: data.title.trim(),
    course: data.course.trim(),
    deadline: data.deadline,
    difficulty: data.difficulty || 'Sedang',
    status: data.status || 'Belum Dikerjakan',
    estimatedTime: data.estimatedTime ? data.estimatedTime.trim() : '',
    description: data.description ? data.description.trim() : '',
    createdAt: new Date().toISOString(),
  }

  const updatedTasks = [newTask, ...tasks]
  if (!writeStorage(TASKS_STORAGE_KEY, updatedTasks)) return null
  notifyTasksChanged()

  return {
    ...newTask,
    priority: calculatePriority(newTask),
  }
}

/**
 * Memperbarui data tugas.
 */
export function updateTask(id, updatedFields) {
  const tasks = getTasks()
  const index = tasks.findIndex((t) => String(t.id) === String(id))
  if (index === -1) return null

  const existing = tasks[index]
  const updated = {
    ...existing,
    ...updatedFields,
    title:
      updatedFields.title !== undefined
        ? updatedFields.title.trim()
        : existing.title,
    course:
      updatedFields.course !== undefined
        ? updatedFields.course.trim()
        : existing.course,
    estimatedTime:
      updatedFields.estimatedTime !== undefined
        ? updatedFields.estimatedTime.trim()
        : existing.estimatedTime,
    description:
      updatedFields.description !== undefined
        ? updatedFields.description.trim()
        : existing.description,
    updatedAt: new Date().toISOString(),
  }

  tasks[index] = updated
  if (!writeStorage(TASKS_STORAGE_KEY, tasks)) return null
  notifyTasksChanged()

  return {
    ...updated,
    priority: calculatePriority(updated),
  }
}

/**
 * Memperbarui hanya status tugas secara terpisah.
 */
export function updateTaskStatus(id, newStatus) {
  return updateTask(id, { status: newStatus })
}

/**
 * Menghapus tugas berdasarkan ID.
 */
export function deleteTask(id) {
  const tasks = getTasks()
  const filtered = tasks.filter((t) => String(t.id) !== String(id))
  if (filtered.length === tasks.length) return false

  const saved = writeStorage(TASKS_STORAGE_KEY, filtered)
  if (saved) notifyTasksChanged()
  return saved
}

/**
 * Reset data tugas ke seed data awal.
 */
export function resetTasks() {
  const seed = getInitialSeedTasks()
  if (!writeStorage(TASKS_STORAGE_KEY, seed)) return null
  notifyTasksChanged()
  return seed.map((t) => ({ ...t, priority: calculatePriority(t) }))
}
