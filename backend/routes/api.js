// routes/api.js
const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/TicketController');

// Route to add tickets
router.post('/tickets/add', ticketController.addTickets);

// Route to purchase a ticket
router.post('/tickets/purchase', ticketController.purchaseTicket);

// Route to get ticket status
router.get('/tickets/status', ticketController.getTicketStatus);

module.exports = router;
