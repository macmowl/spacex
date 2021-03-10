import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.background}>
      <h1 className="home-title">
        <span>SpaceX</span> News
      </h1>
      <p>The best place to keep an eye to the sky</p>
    </div>
  )
}
