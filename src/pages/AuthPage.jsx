import { useState } from 'react'
import '../styles/auth-split.css'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../components/Button.jsx'
import { Card } from '../components/Card.jsx'
import { Input } from '../components/Input.jsx'
import {
  getDemoAccount,
  isMatchingAccount,
  registerDemoAccount,
  startSession,
} from '../store/auth.js'
import { validateLogin, validateRegistration } from '../utils/validation.js'

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmation: '',
}

function AuthPage({ mode }) {
  const isRegistration = mode === 'register'
  const navigate = useNavigate()
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [formError, setFormError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
    setFormError('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = isRegistration
      ? validateRegistration(values)
      : validateLogin(values)
    setErrors(nextErrors)
    setSuccessMessage('')
    if (Object.values(nextErrors).some(Boolean)) return

    if (isRegistration) {
      const saved = registerDemoAccount({
        name: values.name.trim(),
        email: values.email.trim(),
        password: values.password,
      })
      if (!saved) {
        setFormError('Akun tidak dapat disimpan di browser ini.')
        return
      }
      setSuccessMessage('Registrasi berhasil. Mengarahkan ke Dashboard...')
      const account = getDemoAccount()
      startSession({ email: account.email, name: account.name })
      window.setTimeout(() => navigate('/dashboard'), 400)
      return
    }

    if (!isMatchingAccount(values.email, values.password)) {
      setFormError('Email atau kata sandi tidak cocok dengan akun demo.')
      return
    }
    const account = getDemoAccount()
    startSession({ email: account.email, name: account.name })
    navigate('/dashboard')
  }

  return (
    <section className={`auth-page auth-page--simple${isRegistration ? ' auth-page--register' : ' auth-page--login'}`}>
      <div className="auth-page__inner">
        <p className="eyebrow">PRIORI</p>
        <h1>{isRegistration ? 'Mari Kita Rapikan Tugasmu' : 'Selamat Datang'}</h1>
        <p className="page-intro">
          {isRegistration
            ? 'Buat akun demo untuk mulai mengatur tugas kuliahmu dengan lebih teratur.'
            : 'Masuk untuk melihat ruang tugasmu dan melanjutkan progres belajar.'}
        </p>
        <Card className="auth-card">
          <form onSubmit={handleSubmit} noValidate>
            {isRegistration ? (
              <Input
                id="name"
                name="name"
                label="Nama"
                value={values.name}
                onChange={handleChange}
                error={errors.name}
                autoComplete="name"
              />
            ) : null}
            <Input
              id="email"
              name="email"
              type="email"
              label="Email"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
              autoComplete="email"
            />
            <Input
              id="password"
              name="password"
              type="password"
              label="Kata Sandi"
              value={values.password}
              onChange={handleChange}
              error={errors.password}
              autoComplete={isRegistration ? 'new-password' : 'current-password'}
            />
            {isRegistration ? (
              <Input
                id="confirmation"
                name="confirmation"
                type="password"
                label="Konfirmasi Kata Sandi"
                value={values.confirmation}
                onChange={handleChange}
                error={errors.confirmation}
                autoComplete="new-password"
              />
            ) : null}
            {formError ? <p className="form-error" role="alert">{formError}</p> : null}
            {successMessage ? <p className="form-success" role="status">{successMessage}</p> : null}
            <Button type="submit">{isRegistration ? 'Registrasi' : 'Login'}</Button>
          </form>
        </Card>
        <p className="auth-switch">
          {isRegistration ? 'Sudah punya akun?' : 'Belum punya akun?'}{' '}
          <Link to={isRegistration ? '/login' : '/register'}>
            {isRegistration ? 'Login di sini' : 'Registrasi di sini'}
          </Link>
        </p>
        <p className="simulation-note">
          Mode simulasi: akun dan kata sandi disimpan secara lokal di browser, bukan untuk penggunaan produksi.
        </p>
      </div>
    </section>
  )}

export default AuthPage
