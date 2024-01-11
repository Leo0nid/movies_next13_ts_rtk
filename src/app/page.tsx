'use client';
import type React from 'react';
import { useGetMoviesPopularysQuery } from '@/redux/api/moviesBaseApi';
import styles from './index.module.scss';

import { IMoviesPopularys } from '@/types/ImoviesPopularys';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import Head from 'next/head';


<Head>title: 'Movies', description: 'movie slider',</Head>;

const MoviesHero = () => {
  const { data, error, isLoading } = useGetMoviesPopularysQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {}</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: 'linear',
    autoplay: true,
    centerMode: true,
  };
  return (
    <>
      <Slider {...settings}>
        {data?.items?.map((movie: IMoviesPopularys) => (
          <Link className={styles.link} href={`/movie/${movie.imdbId}`}>
            <div className={styles.poster}>
              <img className={styles.posterImage} src={movie.posterUrl} alt={movie.nameOriginal} />
            </div>

            <div className={styles.posterOverlay}></div>
          </Link>
        ))}
      </Slider>
    </>
  );
};

export default MoviesHero;
