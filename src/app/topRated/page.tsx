"use client"
import { useGetMovieBySearchQuery } from '@/redux/api/moviesBaseApi';
import React from 'react';
import styles from './index.module.scss'
import '../../components/header/Header'
import { ISearchProducts } from '@/types/ISearchProducts';

const topRated = () => {
    const { data: singleProduct } = useGetMovieBySearchQuery();
  setTimeout(() => {
    if (singleProduct) {
      console.log('есть запрос', singleProduct);
    }
  }, 3000);
  return (
    <div >
        {
           singleProduct&&  singleProduct?.films?.map((product: ISearchProducts) => (
                <div className={styles.name}>{product?.nameRu}</div>
                
                ))
            }
            console.log(nameRu);
    </div>
  )
}

export default topRated