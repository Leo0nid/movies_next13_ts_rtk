'use client';
import React, {  useState } from 'react';


import styles from './index.module.scss';
import {
  useGetMovieByIdQuery,
  useGetMovieBySearchQuery,
  useGetMoviesQuery,
} from '@/redux/api/moviesBaseApi';


import { BiFirstPage } from 'react-icons/bi';
import { BiLastPage } from 'react-icons/bi';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/redux/hooks/hooks';
import { ISearchProducts } from '@/types/ISearchProducts';

import { motion } from 'framer-motion';

const searchResults = () => {
  const router = useRouter();
  //информация об одном  фильме
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);

  useGetMovieByIdQuery(selectedMovieId);

  //выбранный фильм
  const handleMovieClick = (kinopoiskId: number) => {

    if (setSelectedMovieId) {
      setSelectedMovieId(kinopoiskId);

      
    }
  };
  //пагинация
  const [page, setPage] = useState(1);

  const { data: popularyMovies, error, isLoading, isFetching } = useGetMoviesQuery(page);

  //поисковик
  
  
  const searchValue = useAppSelector((state) => state.search.searchValue )

  const { data: searchResults } = useGetMovieBySearchQuery(searchValue);



  if (error) {
    return <div>Ошибка: {}</div>;
  }

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <>
      <div className={styles.wrapper}>
        {searchResults && searchResults?.films?.map((movie: ISearchProducts ,index) => (
          <motion.div
          
            key={movie?.kinopoiskId}
            className={styles.cards}
            onClick={() => handleMovieClick(movie.kinopoiskId)}
            variants={variants} initial="hidden" animate="visible" transition={{
              delay: index * 0.25,
              ease: 'easeInOut',
              duration: 0.5,
              
            }} >
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
      { searchResults  && searchResults ? (
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

export default searchResults;
