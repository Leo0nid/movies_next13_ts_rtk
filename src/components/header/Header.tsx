'use client';
import type React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';
import Logo from '../../../public/IMDB_Logo_2016.svg.png';
import Image from 'next/image';
import { useState } from 'react';
import { useGetMovieBySearchQuery } from '@/redux/api/moviesBaseApi';
import MoviesPopulary from '@/app/moviesPopulary/page';
import { useRouter } from 'next/router';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const { data: singleProduct } = useGetMovieBySearchQuery(searchValue);


  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <Link className={styles.navLink} href="/">
          {' '}
          <Image src={Logo} alt="Next.js Logo" width={80} height={80} />
        </Link>
        <Link className={styles.navLink} href="/moviesPopulary">
          Популярное
        </Link>
        <Link className={styles.navLink} href="/topRated">
          {' '}
          Топ рейтинга
        </Link>
        <Link className={styles.navLink} href="/upcoming">
          {' '}
          Предстоящие{' '}
        </Link>
      </nav>
      <div className={styles.search}>
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          className={styles.searchInput}
          value={searchValue}
          type="text"
          placeholder="Поиск.."
        />
      </div>
      
    </div>
  );
};

export default Header;
