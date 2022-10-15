import { configureStore } from '@reduxjs/toolkit';
import { commentsSlice } from '../features/commentsSlice';
import { deleteModalSlice } from '../features/modals/deleteModalSlice';

export const store = configureStore({
  reducer: {
    comments: commentsSlice.reducer,
    deleteModal: deleteModalSlice.reducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
