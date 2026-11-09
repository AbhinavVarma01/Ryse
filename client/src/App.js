import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import OverviewPage from './pages/OverviewPage';
import UserAnalyticsPage from './pages/UserAnalyticsPage';
import FeatureAdoptionPage from './pages/FeatureAdoptionPage';
import CustomersPage from './pages/CustomersPage';
import CustomerHealthPage from './pages/CustomerHealthPage';
import AdoptionInsightsPage from './pages/AdoptionInsightsPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="min-h-screen bg-[#f7f9fc] text-slate-900">
        <Sidebar
          isOpen={sidebarOpen}
          isCollapsed={sidebarCollapsed}
          onClose={() => setSidebarOpen(false)}
          onToggle={() => setSidebarCollapsed((collapsed) => !collapsed)}
        />
        <div className={`transition-all duration-300 ${sidebarCollapsed ? 'lg:pl-20' : 'lg:pl-72'}`}>
          <Topbar onMenuClick={() => setSidebarOpen(true)} />
          <main className="px-5 py-7 md:px-8 md:py-9">
            <Routes>
              <Route path="/" element={<OverviewPage />} />
              <Route path="/analytics" element={<UserAnalyticsPage />} />
              <Route path="/features" element={<FeatureAdoptionPage />} />
              <Route path="/customers" element={<CustomersPage />} />
              <Route path="/health" element={<CustomerHealthPage />} />
              <Route path="/insights" element={<AdoptionInsightsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
