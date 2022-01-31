
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCooO84dB19lU76DUIrSQkG7l7KMcdjISw",
  authDomain: "geofence-d8038.firebaseapp.com",
  projectId: "geofence-d8038",
  storageBucket: "geofence-d8038.appspot.com",
  messagingSenderId: "787550389859",
  appId: "1:787550389859:web:642077dc8b010e117c5a56",
  measurementId: "G-NSC9N4138K"
};

// console.log(firebase)

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;