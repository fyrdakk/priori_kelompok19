import { Route, Routes } from 'react-router-dom'
import PlaceholderPage from './pages/PlaceholderPage.jsx'

function App() {
  return (
    <Routes>
      <Route path="*" element={<PlaceholderPage />} />
    </Routes>
  )
}

export default App
