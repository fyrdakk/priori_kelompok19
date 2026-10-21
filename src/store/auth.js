const ACCOUNT_KEY = 'priori.demo.account'
const SESSION_KEY = 'priori.demo.session'

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
  const session = readStorage(SESSION_KEY)
  return isValidSession(session) ? session : null
}

export function startSession(account) {
  return writeStorage(SESSION_KEY, {
    email: account.email,
    name: account.name,
  })
}

export function clearSession() {
  try {
    localStorage.removeItem(SESSION_KEY)
  } catch {
    return false
  }
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
