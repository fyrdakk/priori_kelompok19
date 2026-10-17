import { describe, expect, it } from 'vitest'
import { isNonEmptyString } from './isNonEmptyString.js'

describe('isNonEmptyString', () => {
  it('accepts text containing non-whitespace characters', () => {
    expect(isNonEmptyString('Tugas UI')).toBe(true)
  })

  it('rejects empty, whitespace, and non-string values', () => {
    expect(isNonEmptyString('   ')).toBe(false)
    expect(isNonEmptyString('')).toBe(false)
    expect(isNonEmptyString(null)).toBe(false)
  })
})
