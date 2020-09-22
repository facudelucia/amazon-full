import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyCVKBs9D2I8rLCdi7z3ycwsR661rI8rSMU",
    authDomain: "pic-firebase.firebaseapp.com",
    databaseURL: "https://pic-firebase.firebaseio.com",
    projectId: "pic-firebase",
    storageBucket: "pic-firebase.appspot.com",
    messagingSenderId: "175239889864",
    appId: "1:175239889864:web:3078b4b14d9487877cb6fd"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}