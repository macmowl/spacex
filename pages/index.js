import Head from 'next/head'
import { Menu } from '../components/menu'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="page-container">

      <Menu />

      <div className={styles.main}>
        <h1>SpaceX News app</h1>
        <h3>The best place to keep an eye to the sky</h3>
      </div>
    </div>
  )
}
