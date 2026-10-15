import { Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/AppLayout.jsx'
import { GuestRoute, ProtectedRoute } from './components/RouteGuards.jsx'
import { PublicLayout } from './components/PublicLayout.jsx'
import AuthPage from './pages/AuthPage.jsx'
import ComponentReferencePage from './pages/ComponentReferencePage.jsx'
import IndexPage from './pages/IndexPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import PlaceholderPage from './pages/PlaceholderPage.jsx'

const appPages = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    description: 'Ringkasan tugas dan prioritas hari ini.',
  },
  {
    path: '/tasks',
    title: 'Semua Tugas',
    description: 'Temukan dan kelola semua tugas.',
  },
  {
    path: '/tasks/:taskId',
    title: 'Detail Tugas',
    description: 'Lihat informasi lengkap tugas.',
  },
  {
    path: '/tasks/new',
    title: 'Tambah Tugas',
    description: 'Catat tugas baru di Priori.',
  },
  {
    path: '/tasks/:taskId/edit',
    title: 'Edit Tugas',
    description: 'Perbarui informasi tugas.',
  },
  {
    path: '/notifications',
    title: 'Notifikasi',
    description: 'Pengingat deadline yang perlu diperhatikan.',
  },
  {
    path: '/success',
    title: 'Sukses/Konfirmasi',
    description: 'Konfirmasi aksi yang berhasil.',
  },
  {
    path: '/empty-error',
    title: 'Kosong/Error',
    description: 'Keadaan kosong dan error yang jelas.',
  },
  {
    path: '/profile',
    title: 'Profil',
    description: 'Informasi akun pengguna.',
  },
  {
    path: '/settings',
    title: 'Pengaturan',
    description: 'Preferensi dasar aplikasi.',
  },
]

function PageRoute({ page }) {
  return <PlaceholderPage {...page} />
}

function App() {
  return (
    <Routes>
      <Route element={<GuestRoute />}>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<IndexPage />} />
          <Route path="/login" element={<AuthPage mode="login" />} />
          <Route path="/register" element={<AuthPage mode="register" />} />
        </Route>
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route element={<AppLayout />}>
          {appPages.map((page) => (
            <Route
              key={page.path}
              path={page.path}
              element={<PageRoute page={page} />}
            />
          ))}
        </Route>
      </Route>
      <Route path="/_komponen" element={<ComponentReferencePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
