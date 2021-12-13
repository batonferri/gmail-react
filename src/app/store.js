import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/mailSlice.js';

export const store = configureStore({
  reducer: {
    mail: mailReducer,
  },
});
