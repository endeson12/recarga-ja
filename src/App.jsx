import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Recharge from './pages/Recharge';
import RechargeSuccess from './pages/RechargeSuccess';
import Statement from './pages/Statement';
import Profile from './pages/Profile';
import Reports from './pages/Reports';
import PersonalData from './pages/PersonalData.jsx';
import Notifications from './pages/Notifications.jsx';
import PaymentAndPix from './pages/PaymentAndPix.jsx';
import HelpAndSupport from './pages/HelpAndSupport.jsx';
import Settings from './pages/Settings.jsx';
import Privacy from './pages/Privacy.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/recarregar" element={<Recharge />} />
          <Route path="/recarga-sucesso" element={<RechargeSuccess />} />
          <Route path="/extrato" element={<Statement />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/relatorios" element={<Reports />} />
          <Route path="/perfil/dados-pessoais" element={<PersonalData />} />
          <Route path="/perfil/notificacoes" element={<Notifications />} />
          <Route path="/perfil/pagamento-pix" element={<PaymentAndPix />} />
          <Route path="/perfil/ajuda-suporte" element={<HelpAndSupport />} />
          <Route path="/perfil/configuracoes" element={<Settings />} />
          <Route path="/perfil/privacidade" element={<Privacy />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;