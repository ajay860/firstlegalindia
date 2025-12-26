import api from "./api";

export const megaMenuAPI = {
  // Create Mega Menu
  createMegaMenu: async (data) => {
    try {
      const response = await api.post("/mega-menus", data);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Get all Mega Menus (Admin)
  getMegaMenus: async () => {
    try {
      const response = await api.get("/mega-menus");
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Get Mega Menu by key
  getMegaMenuByKey: async (menuKey) => {
    try {
      const response = await api.get(`/mega-menus/${menuKey}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Update Mega Menu
  updateMegaMenu: async (menuKey, payload) => {
    try {
      const response = await api.put(`/mega-menus/${menuKey}`, payload);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Soft delete Mega Menu
  deleteMegaMenu: async (menuKey) => {
    try {
      const response = await api.delete(`/mega-menus/${menuKey}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },
};
