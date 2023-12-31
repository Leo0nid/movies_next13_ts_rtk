export interface IMovies {
  items: [],
  kinopoiskId: number;
  nameRu: string;
  posterUrl: string;
  posterUrlPreview: string,
  ratingKinopoisk: number;
  year: number;
  filmLength: number;
  slogan: string;
  description: string;
  shortDescription: string;
  countries: string;
  genres: Genre[];
  keyword: string
}

interface Genre {
  genre: string;
}