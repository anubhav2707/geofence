import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { geolocated } from "react-geolocated";
import { useAuth } from "../libs/auth";

const Home = (props) => {
  const auth = useAuth();
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

      <main className={styles.main}>
        <h2>Please Sign in to access your saved locations.</h2>
        <div className='btn-container'>
        {
          !auth.user &&
        <button onClick={(e) => auth.signinwithGoogle()}>Sign In with Google</button>
        }
        {
          auth.user &&
        <button onClick={(e) => auth.signout()}>Sign Out</button>
        }
        </div>
          {auth.user && 
        <p className='user-info'>
          Signed in as {auth.user.email}
        </p>
          }
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