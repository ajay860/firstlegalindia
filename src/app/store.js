import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import contactReducer from '../features/contact/contactSlice';
import appointmentReducer from '../features/appointment/appointmentSlice';

// Configure the Redux store with reducers and middleware
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    contact: contactReducer,
    appointment: appointmentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['appointment/setSelectedSlot'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['appointment.selectedSlot'],
      },
    }),
});

// Export types for TypeScript support if needed
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
