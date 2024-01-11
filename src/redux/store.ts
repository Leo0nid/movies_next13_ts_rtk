'use client';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { movieBaseApi } from './api/moviesBaseApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import searchReducer from './slices/searchSlice';
import upComingReducer from './slices/upComing';

const rootReducer = combineReducers({});

export const store = configureStore({
  reducer: {
    [movieBaseApi.reducerPath]: movieBaseApi.reducer,
    search: searchReducer, 
    upcoming: upComingReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieBaseApi.middleware),
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
