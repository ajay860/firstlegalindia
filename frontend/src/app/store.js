import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import contactReducer from '../features/contact/contactSlice';
import megaMenuReducer from "../features/megaMenuSlice";
import serviceReducer from "../features/services/serviceSlice";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    contact: contactReducer,
    megaMenu: megaMenuReducer,
    services: serviceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

// TypeScript types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
