'use client';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { movieBaseApi } from './api/moviesBaseApi';
import { setupListeners } from '@reduxjs/toolkit/query';

const rootReducer = combineReducers({});

export const store = configureStore({
  reducer: {
    [movieBaseApi.reducerPath]: movieBaseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieBaseApi.middleware),
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
