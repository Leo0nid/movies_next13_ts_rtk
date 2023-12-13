'use client';
import React from 'react';
import styles from './index.module.scss';
import { useGetMovieByIdQuery } from '@/redux/api/moviesBaseApi';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { IoMdStarOutline } from 'react-icons/io';

interface PageProps {
  params: {
    id: number;
  };
}

const Details: React.FC<PageProps> = ({ params }) => {
  const { data: selectedMovieData, error, isLoading } = useGetMovieByIdQuery(params.id);
  if (isLoading) {
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Skeleton className={styles.wrapper} height={300} width={200} duration={2} />
    </SkeletonTheme>;
  }
  if (error) {
    return <div>Ошибка: {}</div>;
  }

  return (
    <div className={styles.movie}>
      <div className={styles.moviePoster}>
        <img
          className={styles.movieImg}
          src={`https://kinopoiskapiunofficial.tech/images/posters/${selectedMovieData?.posterUrlPreview}`}
          alt={selectedMovieData?.nameRu}
        />
      </div>
      <div className={styles.movieDetail}>
        <div className={styles.movieName}>{selectedMovieData?.nameRu}</div>
        <div className={styles.movieMain}>
          <div className={styles.movieRating}>
            {selectedMovieData && selectedMovieData.ratingKinopoisk && (
              <>
                {selectedMovieData.ratingKinopoisk} <IoMdStarOutline />
              </>
            )}
          </div>
          <div className={styles.movieRuntime}>
            {selectedMovieData && selectedMovieData?.filmLength
              ? `${selectedMovieData.filmLength} мин`
              : ''}
          </div>
          <div className={styles.movieDate}>{selectedMovieData?.year}</div>
          <div className={styles.movieGenre}>
            {selectedMovieData && selectedMovieData.genres
              ? selectedMovieData.genres.map((genre) => (
                  <div className={styles.movieGenre}>{genre.genre}</div>
                ))
              : ''}
          </div>
        </div>
        <div className={styles.MovieDesc}>{selectedMovieData?.description}</div>
      </div>
    </div>
  );
};

export default Details;
