/* Create greetingSlice */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async () => {
    const response = await axios.get('http://127.0.0.1:3000/api/v1/random_greeting');
    console.log(response.data.message);
    return response.data.message;
  }
);



const initialState = {
  greeting: 'Hello',
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGreeting.fulfilled]: (state, action) => {
      state.greeting = action.payload;
    },
  },
});

export default greetingSlice.reducer;
