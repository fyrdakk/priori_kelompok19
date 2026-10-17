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

export function getDemoAccount() {
  return readStorage(ACCOUNT_KEY)
}

export function registerDemoAccount(account) {
  return writeStorage(ACCOUNT_KEY, account)
}

export function getSession() {
  return readStorage(SESSION_KEY)
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
  return Boolean(getSession()?.email)
}

export function isMatchingAccount(email, password) {
  const account = getDemoAccount()
  return Boolean(
    account &&
    account.email.toLowerCase() === email.trim().toLowerCase() &&
    account.password === password,
  )
}
