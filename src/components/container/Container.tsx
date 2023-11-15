import React from 'react'
import styles from './index.module.scss'


const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className={styles.container}>{children}</section>
  )
}

export default Container