import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCgXk0sZUW9DrnKgMDSb2qHmcMmjvfGZ_Y",
  authDomain: "the-notebook-swana.firebaseapp.com",
  projectId: "the-notebook-swana",
  storageBucket: "the-notebook-swana.appspot.com",
  messagingSenderId: "654154169796",
  appId: "1:654154169796:web:789d61c04d5e1e018b7891",
  measurementId: "G-FCKF1SYRJB"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);