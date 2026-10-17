import { describe, expect, it } from 'vitest'
import { formatDate } from './formatDate'

describe('formatDate', () => {
  it('mengembalikan tanggal dalam format Indonesia singkat', () => {
    const result = formatDate('2026-10-17')
    expect(result).toMatch(/^\d{1,2}\s\w{3}\s\d{4}$/)
    expect(result).not.toContain('-')
  })

  it('mengembalikan input apa adanya bila bukan tanggal valid', () => {
    expect(formatDate('bukan-tanggal')).toBe('bukan-tanggal')
    expect(formatDate('')).toBe('')
  })
})
