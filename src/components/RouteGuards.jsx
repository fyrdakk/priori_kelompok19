import { useSyncExternalStore } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { getSession, subscribeAuth } from '../store/auth.js'

export function ProtectedRoute() {
  const location = useLocation()
  const session = useSyncExternalStore(subscribeAuth, getSession, () => null)
  return session ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  )
}

export function GuestRoute() {
  const session = useSyncExternalStore(subscribeAuth, getSession, () => null)
  return session ? <Navigate to="/dashboard" replace /> : <Outlet />
}
