import React from 'react';
import TicketStatus from '../components/TicketStatus';
import ControlPanel from '../components/ControlPanel';

const TicketDashboard = () => {
  const handleStart = () => console.log('Starting the ticket system...');
  const handleStop = () => console.log('Stopping the ticket system...');
  const handleReset = () => console.log('Resetting the ticket system...');

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Ticket Dashboard</h1>
      <TicketStatus />
      <ControlPanel onStart={handleStart} onStop={handleStop} onReset={handleReset} />
    </div>
  );
};

export default TicketDashboard;
