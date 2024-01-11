'use client';
import React from 'react';
import styles from './index.module.scss';
import { useGetMovieByIdQuery } from '@/redux/api/moviesBaseApi';

import { IoMdStarOutline } from 'react-icons/io';

import { motion } from 'framer-motion';


interface PageProps {
  params: {
    id: number;
  };
}

const Details: React.FC<PageProps> = ({ params }) => {
  const { data: selectedMovieData, error } = useGetMovieByIdQuery(params.id);

  if (error) {
    return <div>Ошибка: {}</div>;
  }
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <motion.div className={styles.movie} variants={variants} initial="hidden" animate="visible" transition={{
      delay: 1,
      ease: 'easeInOut',
      duration: 0.5,
      
    }}>
      <div className={styles.moviePoster}>
        <img
          className={styles.movieImg}
          src={`https://kinopoiskapiunofficial.tech/images/posters/${selectedMovieData?.posterUrlPreview}`}
          alt={selectedMovieData?.nameRu}
        />
      </div>
      <div className={styles.movieDetail}>
        <div className={styles.movieName}>{selectedMovieData?.nameRu}</div>
            <div className={styles.MovieDesc}>{selectedMovieData?.description}</div>
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
      </div>
    </motion.div>
  );
};

export default Details;
