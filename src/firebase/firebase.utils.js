import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCrgp8f0ymYjHD6LecB59quodZrsDn0Dtk",
  authDomain: "cwrn-db-ec10a.firebaseapp.com",
  projectId: "cwrn-db-ec10a",
  storageBucket: "cwrn-db-ec10a.appspot.com",
  messagingSenderId: "897951153721",
  appId: "1:897951153721:web:5b8e7fefcbea12315217e8",
  measurementId: "G-877EEW0WLC",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//getting access to google auth library
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' }); //triggers google log in popup

export const signInWithGoogle = () => auth.signInWithPopup(provider); //only popup's of google.

export default firebase;