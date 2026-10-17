import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { hasSession } from '../store/auth.js'

export function ProtectedRoute() {
  const location = useLocation()
  return hasSession() ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  )
}

export function GuestRoute() {
  return hasSession() ? <Navigate to="/dashboard" replace /> : <Outlet />
}
