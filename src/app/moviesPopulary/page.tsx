'use client';
import React, { useState } from 'react';


import styles from './index.module.scss';
import { useGetMovieByIdQuery, useGetMoviesQuery } from '@/redux/api/moviesBaseApi';
import { IMovies } from '@/types/Imovies';

import { BiFirstPage } from 'react-icons/bi';
import { BiLastPage } from 'react-icons/bi';
import { useRouter } from 'next/navigation';

import { motion } from 'framer-motion';

const MoviesPopulary: React.FC = () => {
  const router = useRouter();
  //информация об одном  фильме
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);
  useGetMovieByIdQuery(selectedMovieId);

  //выбранный фильм
  const handleMovieClick = (kinopoiskId: number) => {
    if (setSelectedMovieId) {
      setSelectedMovieId(kinopoiskId);
      router.push(`/${kinopoiskId}`);
    }
  };
  //пагинация
  const [page, setPage] = useState(1);
  const { data: popularyMovies, error, isLoading, isFetching } = useGetMoviesQuery(page);



  if (error) {
    return <div>Ошибка: {}</div>;
  }

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <>
      <div className={styles.wrapper} >
        {popularyMovies?.items?.map((movie: IMovies,index) => (
          <motion.div variants={variants} initial="hidden" animate="visible" transition={{
            delay: index * 0.25,
            ease: 'easeInOut',
            duration: 0.5,
            
          }}
            key={movie?.kinopoiskId}
            className={styles.cards}
            onClick={() => handleMovieClick(movie.kinopoiskId)}>
            <img className={styles.cardsImg} src={movie?.posterUrl} alt={popularyMovies?.nameRu} />
            <div className={styles.cardsOverlay}>
              <div className={styles.cardsName}>{movie?.nameRu}</div>
              <div className={styles.cardsYear}>
                {movie?.year}
                <span className={styles.cardsRating}>
                  {movie?.filmLength} <i className="fas fa-star" />
                </span>
              </div>
            </div>
            </motion.div>
        ))}
      </div>
      {popularyMovies ? (
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
      ) : (
        ''
      )}
    </>
  );
};

export default MoviesPopulary;
