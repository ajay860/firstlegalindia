import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to add auth token if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Contact API
export const contactAPI = {
  sendMessage: async (messageData) => {
    try {
      const response = await api.post('/contact', messageData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};


export const authAPI = {
  login: async (loginData) => {
    try {
      const response = await api.post('/admin/login', loginData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};


export default api;
