import React, { useState } from 'react';

import Select from 'react-select';
import styles from './index.module.scss'
import { useGetMovieByUpComingQuery } from '@/redux/api/moviesBaseApi';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import * as UpComingSlice from '@/redux/slices/upComing';


const { setYearUpComing, setMonthUpComing } = useAppSelector((state) => state.upcoming);
 
const dispatch = useAppDispatch();

type ValueType = {
  label: number | string; 
  value: number | string; 
};

export default () => {
  const [monthValue, setMonthValue] = useState<ValueType | null>({
    label: 'Январь',
    value: 'JANUARY'
  });
  const [yearValue, setYearhValue] = useState<ValueType | null>({
    label: 2023,
    value: 2023
  })



  const {data:upComing} = useGetMovieByUpComingQuery({
    year: yearValue?.value ? Number(yearValue.value) : undefined,
    month: monthValue?.value ? String(monthValue.value) : undefined,
  })
  
console.log(upComing);

  const month = [
    {label: 'Январь', value: 'JANUARY'},
    {label: 'Февраль', value: "FEBRUARY"},
    {label: 'Март' ,value: "MARCH"},
    {label: 'Апрель' ,value: "APRIL"},
    {label: 'Май', value: "MAY"},
    {label: 'Июнь' ,value: "JUNE"},
    {label: 'Июль' ,value: "JULY"},
    {label: 'Август', value: "AUGUST"},
    {label: 'Сентябрь' ,value: "SEPTEMBER"},
    {label: 'Октябрь' ,value: "OCTOBER"},
    {label: 'Ноябрь' ,value: "NOVEMBER"},
    {label: 'Декабрь' ,value: "DECEMBER"},
  ]  
  const year = [
    {label: 2023, value: 2023},
    {label: 2024 ,value: 2024},
  
  ]
  
  const handleMothSelect = (monthValue:any) => {
    dispatch(setMonthUpComing(setMonthValue(monthValue)))
  }

  const handleYearSelect = (yearhValue:any) => {
    dispatch(setYearUpComing(setYearhValue(yearhValue)))
  }
  return (

    <div className={styles.wrapper}>
      <Select
        className="select"
        classNamePrefix="select"
        onChange={handleMothSelect}
        value={monthValue}
        options={month}

      />
         <Select
        className="select"
        classNamePrefix="select"
        onChange={handleYearSelect}
        value={yearValue}
        options={year}
      />
    </div>

  );
};
