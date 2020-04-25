import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBMZBNWRaUcFO7JzrKzzoLQJBIcLw6rWoc",
  authDomain: "crwn-db-30df9.firebaseapp.com",
  databaseURL: "https://crwn-db-30df9.firebaseio.com",
  projectId: "crwn-db-30df9",
  storageBucket: "crwn-db-30df9.appspot.com",
  messagingSenderId: "751935523521",
  appId: "1:751935523521:web:5d781ccae8b75249f4e240",
  measurementId: "G-2NBZR06XKG"
}

firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;