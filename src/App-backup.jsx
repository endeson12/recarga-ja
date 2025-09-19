import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Recharge from './pages/Recharge';
import RechargeSuccess from './pages/RechargeSuccess';
import Statement from './pages/Statement';
import Profile from './pages/Profile';

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
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
