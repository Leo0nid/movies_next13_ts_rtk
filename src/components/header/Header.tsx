'use client';
import type React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';
import Logo from '../../../public/IMDB_Logo_2016.svg.png'
import Image from 'next/image';



const Header = () => {
  return (
    <div className={styles.header}>
        <nav className={styles.nav}>
        <Link className={styles.navLink} href="/" > <Image src={Logo} alt="Next.js Logo" width={80} height={80} /></Link>
          <Link className={styles.navLink} href="/moviesPopulary">Популярное</Link>
          <Link className={styles.navLink} href="/top_rated"> Топ рейтинга</Link>
          <Link className={styles.navLink} href="/upcoming"> Предстоящие </Link>
        </nav>
      </div>
  );
};

export default Header;
