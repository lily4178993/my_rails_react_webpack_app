/* Create greetingSlice */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async () => {
    const response = await axios.get('http://127.0.0.1:3000/api/v1/random_greeting');
    return response.data.message;
  }
);



const initialState = {
  loading: false,
  greeting: '',
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.loading = false;
        state.greeting = action.payload;
      });
  },
});

export default greetingSlice.reducer;
