// controllers/TicketController.js
const TicketPool = require('../models/TicketPool');  // Import the instance of TicketPool

// Add tickets to the pool
exports.addTickets = (req, res) => {
    const { tickets } = req.body;  // Destructure the tickets from request body
    TicketPool.addTickets(tickets); // Add tickets to the pool
    res.status(200).json({ message: `${tickets.length} tickets added successfully` });
};

// Purchase a ticket from the pool
exports.purchaseTicket = (req, res) => {
    const ticket = TicketPool.removeTicket();  // Attempt to purchase a ticket
    if (ticket) {
        res.status(200).json({ message: `Ticket purchased successfully` });
    } else {
        res.status(400).json({ message: 'No tickets available to purchase' });
    }
};

// Get the current status of tickets
exports.getTicketStatus = (req, res) => {
    const status = TicketPool.getStatus();  // Get the current status
    res.status(200).json(status);  // Return the status as a JSON response
};
