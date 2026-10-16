import { describe, expect, it } from 'vitest'
import { getTaskNotifications } from './notifications.js'

describe('getTaskNotifications', () => {
  const baseDate = new Date('2026-10-16T12:00:00Z')

  it('mengabaikan tugas yang sudah Selesai Dikerjakan', () => {
    const tasks = [
      {
        id: '1',
        title: 'Tugas Selesai',
        course: 'UI/UX',
        deadline: '2026-10-15',
        status: 'Selesai Dikerjakan',
      },
    ]
    const notifs = getTaskNotifications(tasks, baseDate)
    expect(notifs).toHaveLength(0)
  })

  it('mendeteksi tugas terlambat (deadline < referenceDate)', () => {
    const tasks = [
      {
        id: '2',
        title: 'Tugas Terlambat',
        course: 'Basis Data',
        deadline: '2026-10-14',
        status: 'Belum Dikerjakan',
      },
    ]
    const notifs = getTaskNotifications(tasks, baseDate)
    expect(notifs).toHaveLength(1)
    expect(notifs[0].type).toBe('overdue')
    expect(notifs[0].label).toBe('Terlambat')
  })

  it('mendeteksi tugas H-1 dan H-3', () => {
    const tasks = [
      {
        id: '3',
        title: 'Tugas H-1',
        course: 'Web Dev',
        deadline: '2026-10-17',
        status: 'Sedang Dikerjakan',
      },
      {
        id: '4',
        title: 'Tugas H-3',
        course: 'Jaringan',
        deadline: '2026-10-19',
        status: 'Belum Dikerjakan',
      },
      {
        id: '5',
        title: 'Tugas H-10 (Jauh)',
        course: 'Etika',
        deadline: '2026-10-26',
        status: 'Belum Dikerjakan',
      },
    ]
    const notifs = getTaskNotifications(tasks, baseDate)
    expect(notifs).toHaveLength(2)
    expect(notifs[0].type).toBe('h-1')
    expect(notifs[1].type).toBe('h-3')
  })
})
