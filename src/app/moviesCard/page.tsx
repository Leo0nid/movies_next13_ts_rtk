'use client'
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Link from 'next/link';

import styles from './index.module.scss';
import { useGetMoviesQuery } from '@/redux/api/moviesBaseApi';
import { IMoviesPopularys } from '@/types/ImoviesPopularys';
import { IMovies } from '@/types/Imovies';

const MoviesCard = () => {
  const { data, error, isLoading } = useGetMoviesQuery();
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
    {
        data?.items?.map((movie:IMovies) => (

      <div className={styles.cards}>
        <img className={styles.cardsImg} src={movie?.posterUrl} alt={data?.nameRu} />
        {/* <div className={styles.cardsOverlay}>
          <div className={styles.cardsTitle}>{data?.slogan}</div>
          <div className={styles.cardsRuntime}>{data?.year}
          <span className={styles.cardsRating}>{data?.ratingKinopoisk} <i className="fas fa-star" /></span>
          </div>
          <div className={styles.cardsDescription}>{data?.shortDescription.slice(0,118)+"..."}</div>
        </div> */}
      </div>
        ))
    }
  </>
  );
};

export default MoviesCard;
