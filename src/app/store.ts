import { configureStore } from '@reduxjs/toolkit';
import channelReducer from '../feature/channelSlice';
import userReducer from '../feature/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    channel: channelReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
