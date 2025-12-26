import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { serviceAPI } from "../../services/serviceAPI";

/* =========================
   CREATE SERVICE
========================= */
export const createService = createAsyncThunk(
  "service/create",
  async (serviceData, { rejectWithValue }) => {
    try {
      const response = await serviceAPI.createService(serviceData);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || error.message || "Something went wrong"
      );
    }
  }
);

/* =========================
   GET ALL SERVICES
========================= */
export const getAllServices = createAsyncThunk(
  "service/getAll",
  async (params = {}, { rejectWithValue }) => {
    try {
      const response = await serviceAPI.getAllServices(params);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || error.message || "Something went wrong"
      );
    }
  }
);

/* =========================
   GET SERVICE BY ID
========================= */
export const getServiceById = createAsyncThunk(
  "service/getById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await serviceAPI.getServiceById(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || error.message || "Something went wrong"
      );
    }
  }
);

export const getServiceBySlug = createAsyncThunk(
  "service/getBySlug",
  async (slug, { rejectWithValue }) => {
    try {
      const response = await serviceAPI.getServiceBySlug(slug);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || error.message || "Something went wrong"
      );
    }
  }
);

/* =========================
   UPDATE SERVICE
========================= */
export const updateService = createAsyncThunk(
  "service/update",
  async ({ id, payload  }, { rejectWithValue }) => {
    try {
      console.log("id, data, update service UPI", id, payload )
      const response = await serviceAPI.updateService(id, payload );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || error.message || "Something went wrong"
      );
    }
  }
);

/* =========================
   DELETE SERVICE
========================= */
export const deleteService = createAsyncThunk(
  "service/delete",
  async (id, { rejectWithValue }) => {
    try {
      await serviceAPI.deleteService(id);
      return id;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || error.message || "Something went wrong"
      );
    }
  }
);

/* =========================
   GET HOME SERVICES
========================= */
export const getHomeServices = createAsyncThunk(
  "service/getHome",
  async (_, { rejectWithValue }) => {
    try {
      const response = await serviceAPI.getHomeServices();
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || error.message || "Something went wrong"
      );
    }
  }
);

/* =========================
   SLICE
========================= */
const serviceSlice = createSlice({
  name: "service",
  initialState: {
    services: [],
    homeServices: [],
    service: null,
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    resetServiceState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
    clearService: (state) => {
      state.service = null;
    },
  },
  extraReducers: (builder) => {
    builder
      /* CREATE */
      .addCase(createService.pending, (state) => {
        state.loading = true;
      })
      .addCase(createService.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.services.unshift(action.payload);
      })
      .addCase(createService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* GET ALL */
      .addCase(getAllServices.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllServices.fulfilled, (state, action) => {
        state.loading = false;
        state.services = action.payload;
      })
      .addCase(getAllServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* GET BY ID */
      .addCase(getServiceById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getServiceById.fulfilled, (state, action) => {
        state.loading = false;
        state.service = action.payload;
      })
      .addCase(getServiceById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* UPDATE */
      .addCase(updateService.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateService.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.services = state.services.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
      })
      .addCase(updateService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* DELETE */
      .addCase(deleteService.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteService.fulfilled, (state, action) => {
        state.loading = false;
        state.services = state.services.filter(
          (item) => item.id !== action.payload
        );
      })
      .addCase(deleteService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* HOME SERVICES */
      .addCase(getHomeServices.pending, (state) => {
        state.loading = true;
      })
      .addCase(getHomeServices.fulfilled, (state, action) => {
        state.loading = false;
        state.homeServices = action.payload;
      })
      .addCase(getHomeServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* GET BY SLUG */

      .addCase(getServiceBySlug.pending, (state) => {
        state.loading = true;
      })
      .addCase(getServiceBySlug.fulfilled, (state, action) => {
        state.loading = false;
        state.service = action.payload; // 👈 IMPORTANT
      })
      .addCase(getServiceBySlug.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

/* =========================
   EXPORTS
========================= */
export const { resetServiceState, clearService } = serviceSlice.actions;

export const selectServices = (state) => state.services.services;
export const selectHomeServices = (state) => state.services.homeServices;
export const selectServiceState = (state) => state.services;
export const selectSingleService = (state) => state.services.service;

export default serviceSlice.reducer;
