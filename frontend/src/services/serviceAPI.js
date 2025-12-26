import api from "./api";

export const serviceAPI = {
  /**
   * CREATE SERVICE
   */
  createService: async (data) => {
    try {
      const response = await api.post("/services", data);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  /**
   * GET ALL SERVICES
   * Optional params: { display_to_home: true }
   */
  getAllServices: async (params = {}) => {
    try {
      const response = await api.get("/services", { params });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  /**
   * GET SERVICE BY ID
   */
  getServiceById: async (id) => {
    try {
      const response = await api.get(`/services/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  getServiceBySlug: async (slug) => {
    try {
      const response = await api.get(`/services/slug/${slug}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  /**
   * UPDATE SERVICE
   */
  updateService: async (id, data) => {
    try {
      const response = await api.put(`/services/${id}`, data);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  /**
   * DELETE SERVICE
   */
  deleteService: async (id) => {
    try {
      const response = await api.delete(`/services/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  /**
   * GET HOME PAGE SERVICES
   */
  getHomeServices: async () => {
    try {
      const response = await api.get("/services/home");
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },
};
