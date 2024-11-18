import React, { useEffect, useState } from 'react';
import { getTicketStatus } from '../services/ticketService'; // API service

const TicketStatus = () => {
  const [status, setStatus] = useState({ available: 0, sold: 0 });

  useEffect(() => {
    const fetchStatus = async () => {
      const result = await getTicketStatus();
      setStatus(result);
    };

    fetchStatus();
  }, []);

  return (
    <div className="p-4 border rounded">
      <h2 className="font-bold text-lg">Ticket Status</h2>
      <p>Available Tickets: {status.available}</p>
      <p>Sold Tickets: {status.sold}</p>
    </div>
  );
};

export default TicketStatus;
