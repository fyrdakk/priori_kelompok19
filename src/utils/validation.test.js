import { describe, expect, it } from 'vitest'
import {
  PASSWORD_MIN_LENGTH,
  validateEmail,
  validateLogin,
  validateName,
  validatePassword,
  validatePasswordConfirmation,
  validateRegistration,
} from './validation.js'

describe('validation helpers', () => {
  it('validates email format and required state', () => {
    expect(validateEmail('')).toBe('Email wajib diisi.')
    expect(validateEmail('bukan-email')).toBe(
      'Masukkan alamat email yang valid.',
    )
    expect(validateEmail('user@example.com')).toBe('')
  })

  it('requires a password with the configured minimum length', () => {
    expect(validatePassword('')).toBe('Kata sandi wajib diisi.')
    expect(validatePassword('1234567')).toContain(String(PASSWORD_MIN_LENGTH))
    expect(validatePassword('12345678')).toBe('')
  })

  it('requires a non-empty name and matching confirmation', () => {
    expect(validateName('  ')).toBe('Nama wajib diisi.')
    expect(validatePasswordConfirmation('password1', '')).toBe(
      'Konfirmasi kata sandi wajib diisi.',
    )
    expect(validatePasswordConfirmation('password1', 'password2')).toBe(
      'Konfirmasi kata sandi tidak sama.',
    )
    expect(validatePasswordConfirmation('password1', 'password1')).toBe('')
  })

  it('returns field errors for login and registration', () => {
    expect(validateLogin({ email: '', password: '' })).toEqual({
      email: 'Email wajib diisi.',
      password: 'Kata sandi wajib diisi.',
    })
    expect(
      validateRegistration({
        name: '',
        email: 'wrong',
        password: 'short',
        confirmation: 'different',
      }),
    ).toEqual({
      name: 'Nama wajib diisi.',
      email: 'Masukkan alamat email yang valid.',
      password: 'Kata sandi minimal 8 karakter.',
      confirmation: 'Konfirmasi kata sandi tidak sama.',
    })
  })
})
