import { createSlice } from '@reduxjs/toolkit'

// Criando o Estado Inicial
const initialState = {
  properties: [],
  property: {},
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
}

export const propertySlice = createSlice({
	name: "property",
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		
	},
});

export const { reset } = propertySlice.actions;
export default propertySlice.reducer;