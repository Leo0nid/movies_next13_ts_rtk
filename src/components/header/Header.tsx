'use client';
import type React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';
import Logo from '../../../public/IMDB_Logo_2016.svg.png';
import Image from 'next/image';
import { useGetMovieBySearchQuery } from '@/redux/api/moviesBaseApi';
import {  setSearchValue } from '@/redux/slices/searchSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';



const Header = () => {
  const router = useRouter();
  const {searchValue} = useAppSelector((state) => state.search )
  const dispatch = useAppDispatch();


  //поисковик
  const {data:searchResults} = useGetMovieBySearchQuery(searchValue);

  useEffect(() => {
    if(!searchResults || searchResults?.films?.length === 0) {
      router.push('/')
    }
  }, [searchResults,router])

  const onClickEnterSearch =(event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      router.push('/searchResults')
      event.preventDefault();
      
  } 

}

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
        <Link className={styles.navLink} href="/upComing">
          {' '}
          Предстоящие{' '}
        </Link>
     
      </nav>
      <div className={styles.search}>
        <input
          onChange={(event) => dispatch(setSearchValue(event.target.value))}
          onKeyDown={(event) => onClickEnterSearch(event)}
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
