import { configureStore } from '@reduxjs/toolkit';
import { commentsSlice } from '../features/commentsSlice';

export const store = configureStore({
  reducer: {
    comments: commentsSlice.reducer,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
