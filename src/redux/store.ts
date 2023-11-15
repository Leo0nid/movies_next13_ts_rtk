"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import { moviesPopularysApi } from "./api/moviesPopularysApi";
import { setupListeners } from "@reduxjs/toolkit/query";




const rootReducer = combineReducers({

  
},);


export const store = configureStore({
  reducer: {
    [moviesPopularysApi.reducerPath]: moviesPopularysApi.reducer
   },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(moviesPopularysApi.middleware),

});
setupListeners(store.dispatch)
 export type RootState = ReturnType <typeof store.getState>
 export type AppDispatch = typeof store.dispatch