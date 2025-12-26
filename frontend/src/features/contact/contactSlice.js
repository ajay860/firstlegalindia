import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { contactAPI } from '../../services/contactAPI';


// Async thunk for sending contact message
export const sendContactMessage = createAsyncThunk(
  'contact/sendMessage',
  async (messageData, { rejectWithValue }) => {
    try {
      const response = await contactAPI.createContact(messageData);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getAllContactsThunk = createAsyncThunk(
  "contact/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await contactAPI.getAllContacts();
      return response;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch contacts");
    }
  }
);


const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    loading: false,
    success: false,
    error: null,
    message: '',
    contacts: [],
  },
  reducers: {
    resetContactState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendContactMessage.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
        state.message = '';
      })
      .addCase(sendContactMessage.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload.message;
      })
      .addCase(sendContactMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to send message';
      });

     builder
      .addCase(getAllContactsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllContactsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload; // store fetched contacts
      })
      .addCase(getAllContactsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch contacts';
      });
        
  },
});

export const { resetContactState } = contactSlice.actions;
export const selectContact = (state) => state.contact;
export default contactSlice.reducer;
