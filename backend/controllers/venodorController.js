const TicketPool = require("../models/TicketPool");
const ticketPool = new TicketPool(100);

exports.addTickets = (req, res) => {
    try {
        const { vendor, tickets } = req.body;
        const updatedTickets = ticketPool.addTickets(vendor, tickets);
        res.status(200).json({ message: "Tickets added successfully", tickets: updatedTickets });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getTickets = (req, res) => {
    res.status(200).json(ticketPool.getTickets());
};
