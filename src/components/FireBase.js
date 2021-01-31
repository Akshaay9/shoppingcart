import firebase from "firebase"
const firebaseApp = firebase.initializeApp( {
  apiKey: "AIzaSyAgedMha-Vh5EFt6yofAusA651vNCGMaCw",
  authDomain: "screening1-25a8d.firebaseapp.com",
  projectId: "screening1-25a8d",
  storageBucket: "screening1-25a8d.appspot.com",
  messagingSenderId: "365043377859",
  appId: "1:365043377859:web:0a97033e95300cafd5e476"
  })
  const db=firebaseApp.firestore()
  const auth=firebase.auth();
  export {auth}