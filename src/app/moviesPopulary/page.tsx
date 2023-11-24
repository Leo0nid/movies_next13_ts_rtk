'use client';
import React, { useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import styles from './index.module.scss';
import { useGetMoviesQuery } from '@/redux/api/moviesBaseApi';
import { IMovies } from '@/types/Imovies';

import { BiFirstPage } from 'react-icons/bi';
import { BiLastPage } from 'react-icons/bi';

const MoviesPopulary = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading, isFetching } = useGetMoviesQuery(page);
  console.log(data);

  if (isLoading) {
    return (
      <div className={styles.cards}>
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <Skeleton height={300} duration={2} />
        </SkeletonTheme>
      </div>
    );
  }

  if (error) {
    return <div>Ошибка: {}</div>;
  }
  return (
    <>
      {data?.items?.map((movie: IMovies) => (
        <div className={styles.cards}>
          <img className={styles.cardsImg} src={movie?.posterUrl} alt={data?.nameRu} />
          <div className={styles.cardsOverlay}>
            <div className={styles.cardsName}>{movie?.nameRu}</div>
            <div className={styles.cardsYear}>
              {movie?.year}
              <span className={styles.cardsRating}>
                {movie?.filmLength} <i className="fas fa-star" />
              </span>
            </div>
          </div>
        </div>
      ))}
      <div className={styles.pagination}>
        <button
          className={styles.paginationButton}
          onClick={() => setPage(page - 1)}
          disabled={isFetching}>
          <BiFirstPage />
          Назад
        </button>

        <button
          className={styles.paginationButton}
          onClick={() => setPage(page + 1)}
          disabled={isFetching}>
          Вперед
          <BiLastPage />
        </button>
      </div>
    </>
  );
};

export default MoviesPopulary;
