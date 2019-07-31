import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAKWjcz-LEED_-LcTSd3ZCkemGwIfcMC8A",
  authDomain: "react-rnchatapp.firebaseapp.com",
  databaseURL: "https://react-rnchatapp.firebaseio.com",
  projectId: "react-rnchatapp",
  storageBucket: "react-rnchatapp.appspot.com",
  messagingSenderId: "512109718841",
  appId: "1:512109718841:web:976a6a2ee180a417"
};

const configFirebase = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default configFirebase;
export { db };
