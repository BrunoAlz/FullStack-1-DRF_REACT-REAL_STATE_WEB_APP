import { configureStore } from '@reduxjs/toolkit';
import PropertyReducer from '../slices/properties/PropertySlice';
import authReducer from '../slices/auth/authSlice';

export const store = configureStore({
  reducer: {
    properties: PropertyReducer,
    auth: authReducer,
  },
});
