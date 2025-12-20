import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { serviceAPI } from '../../services/api';

export const createService = createAsyncThunk(
  'service/create',
  async (serviceData, { rejectWithValue }) => {
    try {
      console.log("serviceData", serviceData);
      const response = await serviceAPI.createService(serviceData);
      return response; // { message, data }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const serviceSlice = createSlice({
  name: "service",
  initialState: {
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(createService.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createService.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(createService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetServiceState } = serviceSlice.actions;
export const selectService = (state) => state.service;

export default serviceSlice.reducer;
