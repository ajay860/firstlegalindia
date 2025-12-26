import api from './api';

export const contactAPI = {
  createContact: async (data) => {
    try {
      const response = await api.post('/contact-us', data);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  getAllContacts: async () => {
    try {
      const response = await api.get('/contact-us');
      return response.data.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },
};
