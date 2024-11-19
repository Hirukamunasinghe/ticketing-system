import React, { useState, useEffect } from 'react';
import { getTicketStatus, updateTicketStatus } from '../services/ticketService';
import bgimage from '../assets/dashboardbg.png';
import ControlPanel from '../components/ControlPanel'; // Import ControlPanel
import TicketStatus from '../components/TicketStatus'; // Import TicketStatus

const TicketDashboard = () => {
  const [tickets, setTickets] = useState({
    total: 0,
    available: 0,
    sold: 0,
  });
  const [isRunning, setIsRunning] = useState(false);
  const [transactionInterval, setTransactionInterval] = useState(null);

  // Fetch initial ticket status from the API
  useEffect(() => {
    const fetchInitialStatus = async () => {
      const data = await getTicketStatus();
      setTickets(data);
    };
    fetchInitialStatus();
  }, []);

  // Update ticket status in the backend and state
  const updateTickets = async (newData) => {
    setTickets(newData);
    await updateTicketStatus(newData);
  };

  // Simulate ticket purchase with random ticket count (1-3)
  const simulatePurchase = async () => {
    const maxPurchasable = Math.min(tickets.available, 4);
    const ticketsToPurchase = Math.floor(Math.random() * maxPurchasable) + 1;

    if (ticketsToPurchase > 0 && tickets.available >= ticketsToPurchase) {
      const updatedTickets = {
        ...tickets,
        total: tickets.total - ticketsToPurchase,
        available: tickets.available - ticketsToPurchase,
        sold: tickets.sold + ticketsToPurchase,
      };
      await updateTickets(updatedTickets);
    }
  };

  // Simulate adding tickets
  const simulateAddTickets = async () => {
    const randomAdd = Math.floor(Math.random() * 5) + 1;
    const updatedTickets = {
      ...tickets,
      total: tickets.total + randomAdd,
      available: tickets.available + randomAdd,
    };
    await updateTickets(updatedTickets);
  };

  // Simulate transactions (randomly purchase or add tickets)
  const simulateTransactions = async () => {
    const randomAction = Math.random();
    if (randomAction < 0.5) {
      await simulatePurchase();
    } else {
      await simulateAddTickets();
    }
  };

  // Start the process
  const handleStart = () => {
    if (isRunning) return;
    setIsRunning(true);

    const intervalId = setInterval(simulateTransactions, 2000);
    setTransactionInterval(intervalId);
  };

  // Stop the process
  const handleStop = () => {
    if (!isRunning) return;
    setIsRunning(false);

    clearInterval(transactionInterval);
    setTransactionInterval(null);
  };

  // Reset ticket status
  const handleReset = async () => {
    handleStop();
    const initialStatus = { total: 50, available: 20, sold: 0 };
    await updateTickets(initialStatus);
  };

  return (
    <div
      className="h-screen flex items-center justify-center relative bg-cover bg-center px-4 sm:px-8"
      style={{
        backgroundImage: `url(${bgimage})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-4xl w-full h-auto sm:h-[700px]">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Ticket Dashboard</h1>

        {/* Ticket Info Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 mt-16">
          <div className="bg-blue-100 text-blue-700 h-[150px] sm:h-[200px] p-4 sm:p-6 rounded shadow">
            <h2 className="text-base sm:text-lg font-bold">Total Tickets</h2>
            <p className="text-xl sm:text-2xl font-semibold">{tickets.total}</p>
          </div>
          <div className="bg-green-100 text-green-700 h-[150px] sm:h-[200px] p-4 sm:p-6 rounded shadow">
            <h2 className="text-base sm:text-lg font-bold">Available Tickets</h2>
            <p className="text-xl sm:text-2xl font-semibold">{tickets.available}</p>
          </div>
          <div className="bg-red-100 text-red-700 h-[150px] sm:h-[200px] p-4 sm:p-6 rounded shadow">
            <h2 className="text-base sm:text-lg font-bold">Sold Tickets</h2>
            <p className="text-xl sm:text-2xl font-semibold">{tickets.sold}</p>
          </div>
        </div>


        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 items-center mt-14">
          <button
            onClick={handleStart}
            className="bg-green-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow hover:bg-green-600 w-full sm:w-auto"
          >
            Start
          </button>
          <button
            onClick={handleStop}
            className="bg-yellow-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow hover:bg-yellow-600 w-full sm:w-auto"
          >
            Stop
          </button>
          <button
            onClick={handleReset}
            className="bg-red-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow hover:bg-red-600 w-full sm:w-auto"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketDashboard;