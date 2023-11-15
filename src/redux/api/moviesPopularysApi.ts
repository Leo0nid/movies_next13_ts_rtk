import { IMovies } from '@/types/Imovies';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = 'a2ca4492-932b-43ae-b53f-0a5d79e2e5a7';

export const moviesPopularysApi = createApi({
  reducerPath: 'moviesPopularysApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kinopoiskapiunofficial.tech/api/v2.2/',
    headers:{
      "Content-Type": "application/json",
      "X-API-KEY": API_KEY,
    },
  }),

  endpoints: (builder) => ({
    getMoviesPopularys: builder.query<IMovies, void>({
      query: () => '/films/collections?type=TOP_POPULAR_ALL&page=1',
    }),
  }),
});

export const { useGetMoviesPopularysQuery } = moviesPopularysApi;
