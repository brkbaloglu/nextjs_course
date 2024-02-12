import React from 'react'
import {FaPlayCircle} from 'react-icons/fa'
import Link from "next/link"
import styles from './styles.module.css'
function Header() {
  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
      <Link href="/" className={styles.logo}><FaPlayCircle /> NetFilms</Link>
      <nav className={styles.navigationMenu}>
        <Link href="/" className={styles.navigationMenuItem}>Movies</Link>
        <Link href="/" className={styles.navigationMenuItem}>Series</Link>
        <Link href="/" className={styles.navigationMenuItem}>Kids</Link>
      </nav>
    </div>
    </header>
  )
}

export default Header