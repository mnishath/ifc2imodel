import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3001/api',
  withCredentials: true, // Important for sending session cookies
});

export default apiClient;