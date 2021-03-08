import Image from 'next/image'
import { Menu } from '../components/menu'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="page-container">
      <Menu />
      <div className={styles.main}>
        <h1>SpaceX News</h1>
        <h3>The best place to keep an eye to the sky</h3>
      </div>
      <Image 
        className={styles.backImage}
        src="/bg.jpg"
        alt="SpaceX launch"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  )
}
