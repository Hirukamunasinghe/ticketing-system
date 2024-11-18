import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VendorLogin from './pages/VendorLogin';
import CustomerLogin from './pages/CustomerLogin';
import TicketDashboard from './pages/TicketDashboard';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/vendor-login" element={<VendorLogin />} />
          <Route path="/customer-login" element={<CustomerLogin />} />
          <Route path="/dashboard" element={<TicketDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
