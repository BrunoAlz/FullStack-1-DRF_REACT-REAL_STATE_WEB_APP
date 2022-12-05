import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from '../../services/auth/authService';

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  user: user ? user : null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
};

export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {

    try {
      return await authService.register(userData)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message)
    }
  }
);
