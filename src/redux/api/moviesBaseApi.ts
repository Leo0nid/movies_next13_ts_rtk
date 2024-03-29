import { IMoviesPopularys } from '@/types/ImoviesPopularys';
import { IMovies } from '@/types/Imovies';
import { IUpComing } from '@/types/IUpComing';
import { ISearchProducts } from '@/types/ISearchProducts';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = 'a2ca4492-932b-43ae-b53f-0a5d79e2e5a7';

export const movieBaseApi = createApi({
  reducerPath: 'movieBaseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kinopoiskapiunofficial.tech/api/v2.2/',
    headers:{
      "Content-Type": "application/json",
      "X-API-KEY": API_KEY,
    },
  }),

  endpoints: (builder) => ({
    getMoviesPopularys: builder.query<IMoviesPopularys,  void>({
      query: () => '/films/collections?type=TOP_POPULAR_ALL&page=2',
    }),
    getMovies: builder.query<IMovies, number >({
      query: (page = 1) => `/films/collections?type=TOP_POPULAR_ALL&page=${page}`,
    }),
    getMovieById: builder.query<IMovies, number | null > ( {
      query: (id) => `/films/${id}`
    }),
    getMovieBySearch: builder.query<ISearchProducts, string | void >({
      query:(keyword)=> `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${keyword}`
    }),
    getMovieByUpComing: builder.query<IUpComing, { year: number | void , month: string | void } >({
      query:({year,month})=> `https://kinopoiskapiunofficial.tech/api/v2.1/films/releases?year=${year}&month=${month}&page=1`
    }),
  }),
});


export const { useGetMoviesPopularysQuery , useGetMoviesQuery ,useGetMovieByIdQuery ,useGetMovieBySearchQuery ,useGetMovieByUpComingQuery} = movieBaseApi;

