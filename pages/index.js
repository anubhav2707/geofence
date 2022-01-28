import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { geolocated } from "react-geolocated";

const Home = (props) => {
  return !props.isGeolocationEnabled ? (
    <div className={styles.container}>
      <Head>
        <title>GeoFence</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <b>GeoFence</b>
        </h1>

        <p className={styles.description, styles.redText}>
          Please allow location access to continue.
        </p>
        {/* <div className='btn-container'>
        <button>Allow Access</button>
        </div> */}
      </main>

    </div>
  ) :
  (
    <div className={styles.container}>
      <Head>
        <title>GeoFence</title>
      </Head>

      {console.log(props)}

      <main className={styles.main}>
        <h2>Location access granted!</h2>
        <table>
                <tbody>
                    <tr>
                        <td>latitude</td>
                        <td>{props.coords?.latitude}</td>
                    </tr>
                    <tr>
                        <td>longitude</td>
                        <td>{props.coords?.longitude}</td>
                    </tr>
                </tbody>
            </table>

      </main>

    </div>
  )
}

export default geolocated({
  positionOptions: {
      enableHighAccuracy: true,
  },
  userDecisionTimeout: 100000,
})(Home);