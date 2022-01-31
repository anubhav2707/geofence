
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/functions";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  // creds from env
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;