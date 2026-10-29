import Sidebar from './components/Sidebar'
import Header from './components/Header'
import DashboardPage from './pages/DashboardPage'
import WarehousePage from './pages/WarehousePage'
import WorkOrdersPage from './pages/WorkOrdersPage'
import ProjectsPage from './pages/ProjectsPage'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
    <div>
      <Header />
        <div id="center" className="min-h-screen grid grid-cols-1 md:grid-cols-[8rem_minmax(0,1fr)] md:justify-start justify-center mt-2">
          <Sidebar />
          <main>
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/warehouse" element={<WarehousePage />} />
              <Route path="/work-orders" element={<WorkOrdersPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
          </main>
        </div>
    </div>
    </>
  )
}

export default App
