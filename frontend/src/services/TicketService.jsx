import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/tickets', // Backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fetch ticket status from the API
export const getTicketStatus = async () => {
  try {
    const response = await api.get('/status');
    return response.data;
  } catch (error) {
    console.error('Error fetching ticket status:', error);
    return { total: 50, available: 20, sold: 0 }; // Default fallback
  }
};

// Update ticket status in the backend
export const updateTicketStatus = async (newData) => {
  try {
    await api.put('/status', newData); // PUT request
  } catch (error) {
    console.error('Error updating ticket status:', error);
  }
};
