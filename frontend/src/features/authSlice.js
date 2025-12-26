import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authAPI } from '../services/api';
import Cookies from "js-cookie";


export const loginAdmin = createAsyncThunk(
  'auth/login',
  async (loginData, { rejectWithValue }) => {
    try {
      const response = await authAPI.login(loginData);
      return response; // { message, token }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    success: false,
    error: null,
    token: null,
  },
  reducers: {
    resetAuthState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
    logout: (state) => {
      state.token = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.token = action.payload.token;

        // store JWT for interceptor
        // localStorage.setItem('token', action.payload.token);

        Cookies.set("authToken", action.payload.token, {
          expires: 1,          // 1 day
          secure: true,        // https only
          sameSite: "strict",
        });
        
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.message || 'Invalid email or password';
      });
  },
});

export const { resetAuthState, logout } = authSlice.actions;
export const selectAuth = (state) => state.auth;
export default authSlice.reducer;
