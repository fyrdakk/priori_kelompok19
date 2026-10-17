export const PASSWORD_MIN_LENGTH = 8

export function validateEmail(value) {
  const email = value.trim()
  if (!email) return 'Email wajib diisi.'
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ? ''
    : 'Masukkan alamat email yang valid.'
}

export function validatePassword(value) {
  if (!value) return 'Kata sandi wajib diisi.'
  return value.length >= PASSWORD_MIN_LENGTH
    ? ''
    : `Kata sandi minimal ${PASSWORD_MIN_LENGTH} karakter.`
}

export function validateName(value) {
  return value.trim() ? '' : 'Nama wajib diisi.'
}

export function validatePasswordConfirmation(password, confirmation) {
  if (!confirmation) return 'Konfirmasi kata sandi wajib diisi.'
  return password === confirmation ? '' : 'Konfirmasi kata sandi tidak sama.'
}

export function validateLogin(values) {
  return {
    email: validateEmail(values.email),
    password: validatePassword(values.password),
  }
}

export function validateRegistration(values) {
  return {
    name: validateName(values.name),
    email: validateEmail(values.email),
    password: validatePassword(values.password),
    confirmation: validatePasswordConfirmation(
      values.password,
      values.confirmation,
    ),
  }
}
