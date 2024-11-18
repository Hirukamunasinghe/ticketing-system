import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Change this to your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getTicketStatus = async () => {
  try {
    const response = await api.get('/tickets/status');
    return response.data;
  } catch (error) {
    console.error('Error fetching ticket status:', error);
    return { available: 0, sold: 0 };
  }
};
