import { isSupabaseConfigured, supabase } from '../lib/supabase.js'

const ACCOUNT_KEY = 'priori.demo.account'
const SESSION_KEY = 'priori.demo.session'
let authSnapshot

function readStorage(key) {
  try {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : null
  } catch {
    return null
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch {
    return false
  }
}

function isValidAccount(account) {
  return Boolean(
    account &&
      typeof account === 'object' &&
      typeof account.email === 'string' &&
      typeof account.password === 'string' &&
      typeof account.name === 'string',
  )
}

function isValidSession(session) {
  return Boolean(
    session &&
      typeof session === 'object' &&
      typeof session.email === 'string' &&
      session.email.trim() &&
      typeof session.name === 'string',
  )
}

export function getDemoAccount() {
  const account = readStorage(ACCOUNT_KEY)
  return isValidAccount(account) ? account : null
}

export function registerDemoAccount(account) {
  return writeStorage(ACCOUNT_KEY, account)
}

export function getSession() {
  if (authSnapshot !== undefined) return authSnapshot
  const session = readStorage(SESSION_KEY)
  authSnapshot = isValidSession(session) ? session : null
  return authSnapshot
}

export function startSession(account) {
  const saved = writeStorage(SESSION_KEY, {
    email: account.email,
    name: account.name,
  })
  if (saved) authSnapshot = { email: account.email, name: account.name }
  return saved
}

export async function initializeAuth() {
  if (!isSupabaseConfigured) {
    authSnapshot = getSession()
    return authSnapshot
  }

  const { data, error } = await supabase.auth.getSession()
  if (error) throw error
  authSnapshot = data.session
    ? {
        email: data.session.user.email || '',
        name:
          data.session.user.user_metadata?.name ||
          data.session.user.email?.split('@')[0] ||
          'Mahasiswa',
      }
    : null
  return authSnapshot
}

export function subscribeAuth(listener) {
  if (!isSupabaseConfigured) return () => {}
  const { data } = supabase.auth.onAuthStateChange(async (_event, session) => {
    authSnapshot = session
      ? {
          email: session.user.email || '',
          name:
            session.user.user_metadata?.name ||
            session.user.email?.split('@')[0] ||
            'Mahasiswa',
        }
      : null
    listener()
  })
  return () => data.subscription.unsubscribe()
}

export async function registerAccount({ name, email, password }) {
  if (!isSupabaseConfigured) {
    const saved = registerDemoAccount({ name, email, password })
    if (!saved) throw new Error('Akun tidak dapat disimpan di browser ini.')
    const account = getDemoAccount()
    if (!account || !startSession(account)) {
      throw new Error('Sesi tidak dapat dimulai di browser ini.')
    }
    authSnapshot = { email: account.email, name: account.name }
    return authSnapshot
  }

  const { data, error } = await supabase.auth.signUp({
    email: email.trim(),
    password,
    options: {
      data: { name: name.trim() },
      emailRedirectTo: `${window.location.origin}/login`,
    },
  })
  if (error) throw error
  if (!data.session) {
    return { needsEmailConfirmation: true, email: data.user?.email || email }
  }
  authSnapshot = { email: data.user.email || email, name: name.trim() }
  return { needsEmailConfirmation: false, session: authSnapshot }
}

export async function loginAccount({ email, password }) {
  if (!isSupabaseConfigured) {
    if (!isMatchingAccount(email, password)) {
      throw new Error('Email atau kata sandi tidak cocok dengan akun demo.')
    }
    const account = getDemoAccount()
    if (!account || !startSession(account)) {
      throw new Error('Sesi tidak dapat dimulai di browser ini.')
    }
    authSnapshot = { email: account.email, name: account.name }
    return authSnapshot
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.trim(),
    password,
  })
  if (error) throw error
  authSnapshot = {
    email: data.user.email || email,
    name:
      data.user.user_metadata?.name || data.user.email?.split('@')[0] || 'Mahasiswa',
  }
  return authSnapshot
}

export function clearSession() {
  if (isSupabaseConfigured) {
    authSnapshot = null
    void supabase.auth.signOut()
    return true
  }
  try {
    localStorage.removeItem(SESSION_KEY)
  } catch {
    return false
  }
  authSnapshot = null
  return true
}

export function hasSession() {
  return Boolean(getSession())
}

export function isMatchingAccount(email, password) {
  const account = getDemoAccount()
  return Boolean(
    account &&
    account.email.toLowerCase() === email.trim().toLowerCase() &&
    account.password === password,
  )
}
