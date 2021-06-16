import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import App from './App';
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
firebase.initaliseApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

