import MainLayout from './components/MainLayout'
import DashboardPage from './pages/DashboardPage'
import WarehousePage from './pages/WarehousePage'
import WorkOrdersPage from './pages/WorkOrdersPage'
import ProjectsPage from './pages/ProjectsPage'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/warehouse" element={<WarehousePage />} />
        <Route path="/work-orders" element={<WorkOrdersPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Route>
    </Routes>
  )
}

export default App
