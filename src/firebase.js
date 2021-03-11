import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDto0-62Dw87qbbrVP1jmEHN2qoNCwe3Og",
	authDomain: "bt3103-week-6-fe27a.firebaseapp.com",
	projectId: "bt3103-week-6-fe27a",
	storageBucket: "bt3103-week-6-fe27a.appspot.com",
	messagingSenderId: "486847154238",
	appId: "1:486847154238:web:b6067d17f57490e3caa96f",
	measurementId: "G-3SQVZL84TZ"
  };

  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;