import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { initializeAuth } from './store/auth.js'
import { initializeTasks } from './store/tasks.js'
import './styles/global.css'

async function bootstrap() {
  try {
    await initializeAuth()
    await initializeTasks()
  } catch {
    document.getElementById('root').innerHTML =
      '<p class="boot-error">Aplikasi gagal memuat data. Periksa konfigurasi Supabase dan coba lagi.</p>'
    return
  }

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>,
  )
}

bootstrap()
