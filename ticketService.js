import axios from 'axios';

const API_BASE = "http://localhost:3000/api/tickets";

// Fetch ticket status
export const getTicketStatus = async () => {
  try {
    const response = await axios.get(`${API_BASE}/status`);
    return response.data; // { available: 20, sold: 0 }
  } catch (error) {
    console.error("Error fetching ticket status:", error);
    throw error;
  }
};

// Other API functions
export const addTickets = async (tickets) => {
  try {
    const response = await axios.post(`${API_BASE}/add`, { tickets });
    return response.data;
  } catch (error) {
    console.error("Error adding tickets:", error);
    throw error;
  }
};

export const purchaseTicket = async () => {
  try {
    const response = await axios.post(`${API_BASE}/purchase`);
    return response.data;
  } catch (error) {
    console.error("Error purchasing ticket:", error);
    throw error;
  }
};
