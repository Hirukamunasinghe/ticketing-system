class TicketPool {
  constructor() {
    this.totalTickets = 50; // Total tickets initialized to 50
    this.available = 20;    // Available tickets start at 20
    this.sold = 0;          // No tickets sold initially
    this.ticketList = [];
  }

  addTickets(tickets) {
    const newTicketsCount = tickets.length;
    this.ticketList.push(...tickets);

    // Increment both total and available tickets
    this.totalTickets += newTicketsCount;
    this.available += newTicketsCount;
  }

  removeTicket() {
    // Ensure there are tickets to sell
    if (this.available > 0 && this.totalTickets > 0) {
      this.ticketList.pop();   // Remove a ticket from the pool
      this.available--;        // Decrease available tickets
      this.totalTickets--;     // Decrease total tickets
      this.sold++;             // Increase sold tickets
      return true;             // Indicate ticket has been sold
    }
    return false;              // No tickets available to sell
  }

  getStatus() {
    return {
      total: this.totalTickets,
      available: this.available,
      sold: this.sold,
    };
  }

  resetTickets() {
    this.totalTickets = 50;   // Reset total tickets to initial value
    this.available = 20;      // Reset available tickets to initial value
    this.sold = 0;            // Reset sold tickets to 0
  }
}

module.exports = new TicketPool(); // Export an instance of TicketPool
