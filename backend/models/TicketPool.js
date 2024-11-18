// models/TicketPool.js
class TicketPool {
    constructor() {
      this.available = 0;
      this.sold = 0;
      this.ticketList = [];
    }
  
    addTickets(tickets) {
      this.ticketList.push(...tickets);
      this.available += tickets.length;
    }
  
    removeTicket() {
      if (this.available > 0) {
        this.ticketList.pop();  // Remove a ticket from the pool
        this.available--;       // Decrease available tickets
        this.sold++;            // Increase sold tickets
        return true;            // Indicate ticket has been sold
      }
      return false;             // No ticket available
    }
  
    getStatus() {
      return { available: this.available, sold: this.sold };
    }
  }
  
  module.exports = new TicketPool();  // Export an instance of TicketPool
  