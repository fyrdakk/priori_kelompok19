import { beforeEach, describe, expect, it } from 'vitest'
import {
  createTask,
  deleteTask,
  getTaskById,
  getTasks,
  resetTasks,
  updateTask,
  updateTaskStatus,
} from './tasks.js'

const storageMock = (() => {
  let store = {}
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => {
      store[key] = String(value)
    },
    removeItem: (key) => {
      delete store[key]
    },
    clear: () => {
      store = {}
    },
  }
})()

globalThis.localStorage = storageMock

describe('tasks store', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('mengembalikan seed data awal ketika localStorage kosong', () => {
    const tasks = getTasks()
    expect(tasks.length).toBeGreaterThan(0)
    expect(tasks[0]).toHaveProperty('title')
    expect(tasks[0]).toHaveProperty('priority')
  })

  it('dapat menambahkan tugas baru dengan createTask', () => {
    const newTask = createTask({
      title: 'Tugas Algoritma',
      course: 'Struktur Data',
      deadline: '2026-11-01',
      difficulty: 'Sedang',
      status: 'Belum Dikerjakan',
      estimatedTime: '2 Jam',
      description: 'Implementasi Binary Search Tree',
    })

    expect(newTask).toHaveProperty('id')
    expect(newTask.title).toBe('Tugas Algoritma')

    const tasks = getTasks()
    expect(tasks.some((t) => t.id === newTask.id)).toBe(true)
  })

  it('dapat memperbarui data tugas dengan updateTask', () => {
    const tasks = getTasks()
    const target = tasks[0]

    const updated = updateTask(target.id, {
      title: 'Judul Tugas Baru',
      difficulty: 'Sulit',
    })

    expect(updated.title).toBe('Judul Tugas Baru')
    expect(updated.difficulty).toBe('Sulit')

    const fetched = getTaskById(target.id)
    expect(fetched.title).toBe('Judul Tugas Baru')
  })

  it('dapat memperbarui status tugas secara terpisah dengan updateTaskStatus', () => {
    const tasks = getTasks()
    const target = tasks[0]

    const updated = updateTaskStatus(target.id, 'Selesai Dikerjakan')
    expect(updated.status).toBe('Selesai Dikerjakan')

    const fetched = getTaskById(target.id)
    expect(fetched.status).toBe('Selesai Dikerjakan')
  })

  it('dapat menghapus tugas dengan deleteTask', () => {
    const tasks = getTasks()
    const target = tasks[0]

    const result = deleteTask(target.id)
    expect(result).toBe(true)

    const fetched = getTaskById(target.id)
    expect(fetched).toBeNull()
  })

  it('dapat mereset data tugas dengan resetTasks', () => {
    createTask({
      title: 'Dummy Task',
      course: 'Dummy Course',
      deadline: '2026-12-31',
      difficulty: 'Mudah',
    })
    const reset = resetTasks()
    expect(reset.length).toBe(3)
  })

  it('mengabaikan entri localStorage yang bukan objek tugas', () => {
    localStorage.setItem(
      'priori.demo.tasks',
      JSON.stringify([
        null,
        'rusak',
        { id: 'invalid', title: 'Tidak Lengkap' },
        {
          id: 'valid',
          title: 'Valid',
          course: 'Basis Data',
          deadline: '2026-11-01',
          difficulty: 'Sedang',
          status: 'Belum Dikerjakan',
        },
      ]),
    )

    const tasks = getTasks()

    expect(tasks).toHaveLength(1)
    expect(tasks[0].id).toBe('valid')
  })
})
