import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDLCOpqdM3yBKmWgJouqbl5tkXGjtOoStM",
    authDomain: "skill-bridge-658ca.firebaseapp.com",
    projectId: "skill-bridge-658ca",
    storageBucket: "skill-bridge-658ca.appspot.com",
    messagingSenderId: "298320388239",
    appId: "1:298320388239:web:df7c8fddfb841ac61950fa"
};

firebase.initializeApp(firebaseConfig);

export default firebase;