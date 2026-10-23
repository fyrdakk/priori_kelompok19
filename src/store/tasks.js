import { calculatePriority } from '../utils/priority.js'
import { isSupabaseConfigured, supabase } from '../lib/supabase.js'

const TASKS_STORAGE_KEY = 'priori.demo.tasks'
export const TASKS_CHANGED_EVENT = 'priori:tasks-changed'
let tasksSnapshot

function fromDatabaseTask(task) {
  return {
    id: task.id,
    title: task.title,
    course: task.course,
    deadline: task.deadline,
    difficulty: task.difficulty,
    status: task.status,
    estimatedTime: task.estimated_time || '',
    description: task.description || '',
    createdAt: task.created_at,
    updatedAt: task.updated_at,
  }
}

function toDatabaseTask(data) {
  const payload = {}
  if (data.title !== undefined) payload.title = data.title.trim()
  if (data.course !== undefined) payload.course = data.course.trim()
  if (data.deadline !== undefined) payload.deadline = data.deadline
  if (data.difficulty !== undefined) payload.difficulty = data.difficulty
  if (data.status !== undefined) payload.status = data.status
  if (data.estimatedTime !== undefined) {
    payload.estimated_time = data.estimatedTime.trim()
  }
  if (data.description !== undefined) {
    payload.description = data.description.trim()
  }
  return payload
}

async function getCurrentUserId() {
  const { data, error } = await supabase.auth.getUser()
  if (error) throw error
  if (!data.user) throw new Error('Sesi Supabase tidak ditemukan.')
  return data.user.id
}

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

function notifyTasksChanged(preserveSnapshot = false) {
  if (!preserveSnapshot) tasksSnapshot = undefined
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event(TASKS_CHANGED_EVENT))
  }
}

export function subscribeTasks(listener) {
  if (typeof window === 'undefined') return () => {}
  const handleChange = (event) => {
    if (event.type === 'storage') tasksSnapshot = undefined
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

export async function initializeTasks() {
  if (!isSupabaseConfigured) {
    tasksSnapshot = getTasks()
    return tasksSnapshot
  }

  const { data, error } = await supabase
    .from('tasks')
    .select('*')
    .order('deadline', { ascending: true })
  if (error) throw error
  tasksSnapshot = data.map((task) => {
    const normalized = fromDatabaseTask(task)
    return { ...normalized, priority: calculatePriority(normalized) }
  })
  notifyTasksChanged(true)
  return tasksSnapshot
}

/**
 * Mengambil semua tugas dari localStorage. Jika kosong, menginisialisasi dengan seed data.
 * Menghitung prioritas dinamis untuk tiap tugas.
 */
export function getTasks() {
  if (isSupabaseConfigured) return tasksSnapshot || []
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
  const tasks = getTasksSnapshot()
  const found = tasks.find((t) => String(t.id) === String(id))
  return found || null
}

/**
 * Menambahkan tugas baru.
 */
export function createTask(data) {
  if (isSupabaseConfigured) {
    return getCurrentUserId().then((userId) =>
      supabase
        .from('tasks')
        .insert({ ...toDatabaseTask(data), user_id: userId })
        .select()
        .single()
        .then(({ data: created, error }) => {
          if (error) throw error
          const normalized = fromDatabaseTask(created)
          tasksSnapshot = [normalized, ...(tasksSnapshot || [])].map((task) => ({
            ...task,
            priority: calculatePriority(task),
          }))
          notifyTasksChanged(true)
          return normalized
        }),
    )
  }

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
  if (isSupabaseConfigured) {
    return supabase
      .from('tasks')
      .update(toDatabaseTask(updatedFields))
      .eq('id', id)
      .select()
      .single()
      .then(({ data: updated, error }) => {
        if (error) throw error
        const normalized = fromDatabaseTask(updated)
        tasksSnapshot = (tasksSnapshot || []).map((task) =>
          String(task.id) === String(id)
            ? { ...normalized, priority: calculatePriority(normalized) }
            : task,
        )
        notifyTasksChanged(true)
        return normalized
      })
  }

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
  if (isSupabaseConfigured) {
    return supabase
      .from('tasks')
      .delete()
      .eq('id', id)
      .then(({ error }) => {
        if (error) throw error
        tasksSnapshot = (tasksSnapshot || []).filter(
          (task) => String(task.id) !== String(id),
        )
        notifyTasksChanged(true)
        return true
      })
  }

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
  if (isSupabaseConfigured) {
    return Promise.resolve([])
  }

  const seed = getInitialSeedTasks()
  if (!writeStorage(TASKS_STORAGE_KEY, seed)) return null
  notifyTasksChanged()
  return seed.map((t) => ({ ...t, priority: calculatePriority(t) }))
}
