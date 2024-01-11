export interface IUpComing {
  upComing: [];
  kinopoiskId: number;
  nameRu: string;
  posterUrl: string;
  ratingKinopoisk: number;
  year: number;
  month: number;
  filmLength: number;
  countries: string;
  genres: Genre[];
  keyword: string;
}

interface Genre {
  genre: string;
}
