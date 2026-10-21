import { beforeEach, describe, expect, it } from 'vitest'
import {
  clearSession,
  getDemoAccount,
  getSession,
  isMatchingAccount,
  registerDemoAccount,
  startSession,
} from './auth.js'

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

describe('auth store', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('menyimpan akun dan mencocokkan kredensial secara case-insensitive pada email', () => {
    registerDemoAccount({
      name: 'Mahasiswa',
      email: 'user@example.com',
      password: 'password123',
    })

    expect(isMatchingAccount(' USER@example.com ', 'password123')).toBe(true)
    expect(isMatchingAccount('user@example.com', 'wrong-password')).toBe(false)
  })

  it('mengembalikan false jika sesi gagal disimpan', () => {
    const originalSetItem = localStorage.setItem
    localStorage.setItem = () => {
      throw new Error('storage unavailable')
    }

    expect(startSession({ email: 'user@example.com', name: 'Mahasiswa' })).toBe(
      false,
    )
    expect(getSession()).toBeNull()

    localStorage.setItem = originalSetItem
  })

  it('menghapus sesi aktif', () => {
    startSession({ email: 'user@example.com', name: 'Mahasiswa' })

    expect(clearSession()).toBe(true)
    expect(getSession()).toBeNull()
  })

  it('mengabaikan data akun atau sesi yang malformed', () => {
    localStorage.setItem(
      'priori.demo.account',
      JSON.stringify({ email: 123, password: true }),
    )
    localStorage.setItem(
      'priori.demo.session',
      JSON.stringify({ email: ['invalid'], name: null }),
    )

    expect(getDemoAccount()).toBeNull()
    expect(getSession()).toBeNull()
  })
})
