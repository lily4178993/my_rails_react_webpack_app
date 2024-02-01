/* Create store */

import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from '../Greeting/greetingSlice';

export default configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});
