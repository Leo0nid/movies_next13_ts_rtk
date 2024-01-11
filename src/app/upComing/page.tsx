'use client';
import React, { useState } from 'react';


import styles from './index.module.scss';
import {
  useGetMovieByIdQuery,
  useGetMovieByUpComingQuery,
  useGetMoviesQuery,
} from '@/redux/api/moviesBaseApi';


import { BiFirstPage } from 'react-icons/bi';
import { BiLastPage } from 'react-icons/bi';
import { useRouter } from 'next/navigation';
import Select from '@/components/select/Select';
import { IUpComing } from '@/types/IUpComing';
import { useAppSelector } from '@/redux/hooks/hooks';

const upComing = () => {
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


// предстоящие 
const {yearUpComing,monthUpComing} = useAppSelector((state) => state.upcoming )
const {data:upComing} = useGetMovieByUpComingQuery()

console.log(yearUpComing);

 
  return (
    <>
    <div className={styles.select}>
    <Select/>

    </div>
 
      <div className={styles.wrapper}>
        {upComing?.map((upComing: IUpComing) => (
          <div
            key={upComing?.kinopoiskId}
            className={styles.cards}
            onClick={() => handleMovieClick(upComing.kinopoiskId)}>
            <img className={styles.cardsImg} src={upComing?.posterUrl} alt={popularyMovies?.nameRu} />
            <div className={styles.cardsOverlay}>
              <div className={styles.cardsName}>{upComing?.nameRu}</div>
              <div className={styles.cardsYear}>
                {upComing?.year}
                <span className={styles.cardsRating}>
                  {upComing?.filmLength} <i className="fas fa-star" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {upComing ? (
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

export default upComing;
