import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDpJ1VENSFnY1T8vaVudiafyoVm97sgMWU",
  authDomain: "meuapp-d87fe.firebaseapp.com",
  databaseURL: "https://meuapp-d87fe-default-rtdb.firebaseio.com",
  projectId: "meuapp-d87fe",
  storageBucket: "meuapp-d87fe.appspot.com",
  messagingSenderId: "30564499433",
  appId: "1:30564499433:web:1a63d2f80b8123ecca1578",
  measurementId: "G-27CWK34KVL"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };