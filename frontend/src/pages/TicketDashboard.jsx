import React, { useState, useEffect } from 'react';
import ControlPanel from '../components/ControlPanel';
import TicketStatus from '../components/TicketStatus';
import { getTicketStatus, updateTicketStatus } from '../services/ticketService'; // API functions

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
      const data = await getTicketStatus(); // Fetch from API
      setTickets(data);
    };
    fetchInitialStatus();
  }, []);

  // Update ticket status in the backend and state
  const updateTickets = async (newData) => {
    setTickets(newData); // Update UI
    await updateTicketStatus(newData); // Update backend
  };

  // Simulate ticket purchase with random ticket count (1-3)
  const simulatePurchase = async () => {
    const maxPurchasable = Math.min(tickets.available, 4); // Maximum tickets purchasable (1 to 3)
    const ticketsToPurchase = Math.floor(Math.random() * maxPurchasable) + 1;

    if (ticketsToPurchase > 0 && tickets.available >= ticketsToPurchase) {
      const updatedTickets = {
        ...tickets,
        total: tickets.total - ticketsToPurchase, // Decrease total tickets
        available: tickets.available - ticketsToPurchase, // Decrease available tickets
        sold: tickets.sold + ticketsToPurchase, // Increase sold tickets
      };
      await updateTickets(updatedTickets);
    }
  };

  // Simulate adding tickets
  const simulateAddTickets = async () => {
    const randomAdd = Math.floor(Math.random() * 5) + 1; // Add 1-5 tickets
    const updatedTickets = {
      ...tickets,
      total: tickets.total + randomAdd, // Increase total tickets
      available: tickets.available + randomAdd, // Increase available tickets
    };
    await updateTickets(updatedTickets);
  };

  // Simulate transactions (randomly purchase or add tickets)
  const simulateTransactions = async () => {
    const randomAction = Math.random();
    if (randomAction < 0.5) {
      await simulatePurchase(); // 50% chance of purchase
    } else {
      await simulateAddTickets(); // 50% chance of adding tickets
    }
  };

  // Start the process
  const handleStart = () => {
    if (isRunning) return; // Prevent multiple intervals
    setIsRunning(true);

    const intervalId = setInterval(simulateTransactions, 2000); // Transactions every 2 seconds
    setTransactionInterval(intervalId);
  };

  // Stop the process
  const handleStop = () => {
    if (!isRunning) return;
    setIsRunning(false);

    clearInterval(transactionInterval); // Stop the interval
    setTransactionInterval(null);
  };

  // Reset ticket status
  const handleReset = async () => {
    handleStop(); // Stop processes
    const initialStatus = { total: 50, available: 20, sold: 0 }; // Default values
    await updateTickets(initialStatus); // Reset backend and UI
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Ticket Dashboard</h1>
      <TicketStatus tickets={tickets} /> {/* Display tickets */}
      <ControlPanel onStart={handleStart} onStop={handleStop} onReset={handleReset} />
    </div>
  );
};

export default TicketDashboard;
