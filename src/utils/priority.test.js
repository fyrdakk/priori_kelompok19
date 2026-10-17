import { describe, expect, it } from 'vitest'
import { calculatePriority, PRIORITY_LEVELS } from './priority.js'

describe('calculatePriority', () => {
  const baseDate = new Date('2026-10-16T12:00:00Z')

  it('mengembalikan Prioritas Rendah jika tugas sudah Selesai Dikerjakan', () => {
    const task = {
      deadline: '2026-10-17',
      difficulty: 'Sulit',
      status: 'Selesai Dikerjakan',
    }
    expect(calculatePriority(task, baseDate)).toBe(PRIORITY_LEVELS.LOW)
  })

  it('mengembalikan Prioritas Tinggi jika deadline <= 2 hari ke depan', () => {
    const task = {
      deadline: '2026-10-18', // 2 hari lagi
      difficulty: 'Mudah',
      status: 'Belum Dikerjakan',
    }
    expect(calculatePriority(task, baseDate)).toBe(PRIORITY_LEVELS.HIGH)
  })

  it('mengembalikan Prioritas Tinggi jika deadline 3-4 hari ke depan dan tingkat kesulitan Sulit', () => {
    const task = {
      deadline: '2026-10-19', // 3 hari lagi
      difficulty: 'Sulit',
      status: 'Sedang Dikerjakan',
    }
    expect(calculatePriority(task, baseDate)).toBe(PRIORITY_LEVELS.HIGH)
  })

  it('mengembalikan Prioritas Sedang jika deadline 3-4 hari ke depan dan tingkat kesulitan Sedang atau Mudah', () => {
    const task = {
      deadline: '2026-10-20', // 4 hari lagi
      difficulty: 'Sedang',
      status: 'Belum Dikerjakan',
    }
    expect(calculatePriority(task, baseDate)).toBe(PRIORITY_LEVELS.MEDIUM)
  })

  it('mengembalikan Prioritas Rendah jika deadline jauh (> 7 hari) dan tingkat kesulitan Mudah', () => {
    const task = {
      deadline: '2026-10-30', // 14 hari lagi
      difficulty: 'Mudah',
      status: 'Belum Dikerjakan',
    }
    expect(calculatePriority(task, baseDate)).toBe(PRIORITY_LEVELS.LOW)
  })
})
