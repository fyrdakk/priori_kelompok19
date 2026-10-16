import { Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/AppLayout.jsx'
import { GuestRoute, ProtectedRoute } from './components/RouteGuards.jsx'
import { PublicLayout } from './components/PublicLayout.jsx'
import AddTaskPage from './pages/AddTaskPage.jsx'
import AuthPage from './pages/AuthPage.jsx'
import ComponentReferencePage from './pages/ComponentReferencePage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import EditTaskPage from './pages/EditTaskPage.jsx'
import EmptyErrorPage from './pages/EmptyErrorPage.jsx'
import IndexPage from './pages/IndexPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import NotificationsPage from './pages/NotificationsPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import SettingsPage from './pages/SettingsPage.jsx'
import SuccessPage from './pages/SuccessPage.jsx'
import TaskDetailPage from './pages/TaskDetailPage.jsx'
import TasksPage from './pages/TasksPage.jsx'

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
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/tasks/new" element={<AddTaskPage />} />
          <Route path="/tasks/:taskId" element={<TaskDetailPage />} />
          <Route path="/tasks/:taskId/edit" element={<EditTaskPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/empty-error" element={<EmptyErrorPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Route>
      <Route path="/_komponen" element={<ComponentReferencePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
