import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { RoleProvider } from './context/RoleContext';
import { AppShell } from './layouts/AppShell';

import SuperHome from './pages/SuperHome';
import ServicesPage from './pages/ServicesPage';
import NotificationsPage from './pages/NotificationsPage';
import ProfilePage from './pages/ProfilePage';

import BankingPage from './pages/services/BankingPage';
import BillPaymentsPage from './pages/services/BillPaymentsPage';
import WalletPage from './pages/services/WalletPage';
import AgriServicesPage from './pages/services/AgriServicesPage';
import LogisticsPage from './pages/services/LogisticsPage';
import SMEServicesPage from './pages/services/SMEServicesPage';
import MarketplacePage from './pages/services/MarketplacePage';
import InsurancePage from './pages/services/InsurancePage';
import GovServicesPage from './pages/services/GovServicesPage';
import CommonServicesPage from './pages/services/CommonServicesPage';
import WealthPage from './pages/services/WealthPage';
import HealthPage from './pages/services/HealthPage';
import SportsPage from './pages/services/SportsPage';
import MobilePage from './pages/services/MobilePage';

function App() {
  return (
    <RoleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppShell />}>
            <Route index element={<SuperHome />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="notifications" element={<NotificationsPage />} />
            <Route path="profile" element={<ProfilePage />} />
            {/* Mini Home Pages */}
            <Route path="service/banking" element={<BankingPage />} />
            <Route path="service/bills" element={<BillPaymentsPage />} />
            <Route path="service/wallet" element={<WalletPage />} />
            <Route path="service/agri" element={<AgriServicesPage />} />
            <Route path="service/logistics" element={<LogisticsPage />} />
            <Route path="service/sme" element={<SMEServicesPage />} />
            <Route path="service/market" element={<MarketplacePage />} />
            <Route path="service/insurance" element={<InsurancePage />} />
            <Route path="service/gov" element={<GovServicesPage />} />
            <Route path="service/common" element={<CommonServicesPage />} />
            <Route path="service/wealth" element={<WealthPage />} />
            <Route path="service/health" element={<HealthPage />} />
            <Route path="service/sport" element={<SportsPage />} />
            <Route path="service/mobile" element={<MobilePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RoleProvider>
  );
}

export default App;
