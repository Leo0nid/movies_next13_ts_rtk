'use client'
import React from 'react'
import styles from './index.module.scss'
import { useGetMovieByIdQuery } from '@/redux/api/moviesBaseApi';

interface PageProps {
  params: {
    id: number;

  };
}

const Details:React.FC <PageProps> = ({params}) => {
  const {  data: selectedMovieData, error, isLoading } = useGetMovieByIdQuery(params.id);


  return (
    <div className={styles.movie}>
      <div className={styles.movieWrapper}>
      <div className={styles.moviePoster}>
        <img className={styles.movieImg} src={`https://kinopoiskapiunofficial.tech/images/posters/${selectedMovieData?.posterUrlPreview}`} alt={selectedMovieData?.nameRu} />
      </div>
                    <div className={styles.movieDetail}>
                        <div className={styles.movieName}>{selectedMovieData?.nameRu}</div>
                        <div className={styles.movieTagline}>{selectedMovieData?.slogan}</div>
                        <div className={styles.movieRating}>
                            {selectedMovieData?.ratingKinopoisk} <i className="fas fa-star" />
                           
                        </div>  
                        <div className={styles.movieRuntime}>{selectedMovieData?.filmLength + " mins"}</div>
                        <div className={styles.movieDate}>{selectedMovieData?.year}</div>
                        <div className={styles.movieGenre}>
                           {selectedMovieData?.genre}
                        </div>
                        <div className={styles.desc}>{selectedMovieData?.description}</div>
                        </div>
                        </div>
      </div>
  )
}

export default Details