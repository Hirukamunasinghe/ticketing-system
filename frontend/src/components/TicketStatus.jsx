import React from 'react';

const TicketStatus = ({ tickets }) => {
  return (
    <div className="p-4 bg-gray-100 rounded shadow">
      <h2 className="text-lg font-semibold">Ticket Status</h2>
      <p>Total Tickets: <span className="text-blue-500">{tickets.total}</span></p>
      <p>Available Tickets: <span className="text-green-500">{tickets.available}</span></p>
      <p>Sold Tickets: <span className="text-red-500">{tickets.sold}</span></p>
    </div>
  );
};

export default TicketStatus;
