import axios from 'axios';

const API_BASE_URL = 'https://api.example.com';

// Example API service for fetching data
export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/data`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
