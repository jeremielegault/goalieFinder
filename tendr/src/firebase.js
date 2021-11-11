import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBte9IzfUB5TBUxeBywieOuFrYbhhOMiiU",
  authDomain: "tendr-goalie-finder.firebaseapp.com",
  databaseURL: "https://tendr-goalie-finder-default-rtdb.firebaseio.com",
  projectId: "tendr-goalie-finder",
  storageBucket: "tendr-goalie-finder.appspot.com",
  messagingSenderId: "82470248465",
  appId: "1:82470248465:web:d2583876fcc6ea59a1d1b0",
  measurementId: "G-FMP22EWRCJ",
};

const firebaseApp = firebase.initilizeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
