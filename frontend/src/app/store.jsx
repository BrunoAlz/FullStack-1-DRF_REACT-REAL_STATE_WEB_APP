import { configureStore } from '@reduxjs/toolkit';
import PropertyReducer from '../slices/properties/PropertySlice';

export const store = configureStore({
  reducer: {
    properties: PropertyReducer,
  },
});
