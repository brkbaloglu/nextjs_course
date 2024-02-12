import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'
function Footer() {
  return (
    <footer className={styles.footer}>
      Made by &nbsp;
      <Link href="https://google.com" target="_blank">Netfilms</Link>
    </footer>
  )
}

export default Footer