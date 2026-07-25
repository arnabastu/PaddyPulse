import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DashboardHome from './pages/DashboardHome'
import FieldMonitoring from './pages/FieldMonitoring'
import AIInsight from './pages/AIInsight'
import CarbonCredits from './pages/CarbonCredits'
import Analytics from './pages/Analytics'
import Settings from './pages/Settings'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="lg:ml-64 min-h-screen flex flex-col pb-24 lg:pb-0">
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/field-monitoring" element={<FieldMonitoring />} />
          <Route path="/ai-insights" element={<AIInsight />} />
          <Route path="/carbon-credits" element={<CarbonCredits />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
