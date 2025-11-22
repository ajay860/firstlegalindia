import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { appointmentAPI } from '../../services/api';

// Async thunks
export const bookAppointment = createAsyncThunk(
  'appointment/book',
  async (appointmentData, { rejectWithValue }) => {
    try {
      const response = await appointmentAPI.bookAppointment(appointmentData);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getAvailableSlots = createAsyncThunk(
  'appointment/availableSlots',
  async (date, { rejectWithValue }) => {
    try {
      const response = await appointmentAPI.getAvailableSlots(date);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const appointmentSlice = createSlice({
  name: 'appointment',
  initialState: {
    loading: false,
    success: false,
    error: null,
    message: '',
    availableSlots: [],
    selectedSlot: null,
  },
  reducers: {
    resetAppointmentState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.message = '';
    },
    setSelectedSlot: (state, action) => {
      state.selectedSlot = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Book Appointment
      .addCase(bookAppointment.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
        state.message = '';
      })
      .addCase(bookAppointment.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload.message;
        state.selectedSlot = null;
      })
      .addCase(bookAppointment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to book appointment';
      })
      // Get Available Slots
      .addCase(getAvailableSlots.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAvailableSlots.fulfilled, (state, action) => {
        state.loading = false;
        state.availableSlots = action.payload.data || [];
      })
      .addCase(getAvailableSlots.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to fetch available slots';
        state.availableSlots = [];
      });
  },
});

export const { resetAppointmentState, setSelectedSlot } = appointmentSlice.actions;
export const selectAppointment = (state) => state.appointment;
export default appointmentSlice.reducer;
