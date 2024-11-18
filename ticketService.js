// Simulating vendor and customer threads
const axios = require('axios');

class Vendor {
    static async addTickets() {
        // Simulating the action of adding tickets to the pool by a vendor
        const tickets = ["Ticket-101", "Ticket-102", "Ticket-103"];
        await axios.post('http://localhost:3000/api/tickets/add', { tickets });
        console.log(`${tickets.length} tickets added by Vendor`);
    }
}

class Customer {
    static async purchaseTicket() {
        // Simulating the action of purchasing tickets by a customer
        const response = await axios.post('http://localhost:3000/api/tickets/purchase');
        console.log(response.data.message);
    }
}

// Simulate multiple vendors adding tickets concurrently
async function simulateVendors() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            Vendor.addTickets();
        }, Math.random() * 1000);
    }
}

// Simulate multiple customers purchasing tickets concurrently
async function simulateCustomers() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            Customer.purchaseTicket();
        }, Math.random() * 1000);
    }
}

// Run simulations
simulateVendors();
simulateCustomers();
