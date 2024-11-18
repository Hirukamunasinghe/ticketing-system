const TicketPool = require("../models/TicketPool");
const ticketPool = new TicketPool();

exports.purchaseTicket = (req, res) => {
    try {
        const { customer } = req.body;
        const purchasedTicket = ticketPool.removeTicket(customer);
        res.status(200).json({ message: "Ticket purchased successfully", purchasedTicket });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
