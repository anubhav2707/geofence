import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GeoFence</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <b>GeoFence</b>
        </h1>

        <p className={styles.description}>
          The app needs your permission to use your location. Get started by allowing location access.
        </p>

      <div className='btn-container'>
        <button>Allow Access</button>
      </div>

      </main>

    </div>
  )
}
