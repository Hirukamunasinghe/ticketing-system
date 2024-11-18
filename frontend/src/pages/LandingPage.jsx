import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgimage from '../assets/background.jpg';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen relative">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>
      <div className="relative z-10 flex flex-col justify-center items-center text-white text-center h-full px-4">
        <div>
          <h1 className="text-4xl font-bold sm:text-3xl">Hello!</h1>
          <p className="mt-4 text-lg font-semibold sm:text-lg">Welcome to our website.</p>
        </div>

        {/* Navigation Boxes */}
        <div className="w-full flex flex-col sm:flex-row justify-center items-center sm:gap-6 mt-10">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center w-full sm:w-[300px] h-[250px] flex flex-col items-center justify-between">
            <h2 className="text-xl font-semibold text-black mt-10">Vendor Login</h2>
            <button
              className="px-6 py-2 bg-blue-900 text-white rounded hover:bg-blue-600 transition w-full sm:w-auto"
              onClick={() => navigate('/vendor-login')}
            >
              Log in
            </button>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center w-full sm:w-[300px] h-[250px] flex flex-col items-center justify-between mt-4 sm:mt-0">
            <h2 className="text-xl font-semibold text-black mt-10">Customer Login</h2>
            <button
              className="px-6 py-2 bg-blue-900 text-white rounded hover:bg-blue-600 transition w-full sm:w-auto"
              onClick={() => navigate('/customer-login')}
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
