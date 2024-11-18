import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgimage from '../assets/loginbg.jpg'; 

const VendorLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Mock credentials for vendor
    const correctUsername = 'vendor123';
    const correctPassword = 'vendorpassword';

    // Check if entered credentials are correct
    if (username === correctUsername && password === correctPassword) {
      // Redirect to TicketDashboard on success
      navigate('/dashboard');
    } else {
      // Show error message on failure
      setError('Invalid username or password');
    }
  };

  return (
    <div
      className="h-screen flex items-center justify-center relative"
      style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      
      <div className="relative z-10 bg-white p-6 rounded-xl shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Vendor Login</h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default VendorLogin;
