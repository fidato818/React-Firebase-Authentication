import firebase from "firebase";

const firebaseConfig = {
  apiKey: "****************************************",
  authDomain: "****************************************",
  databaseURL: "****************************************",
  projectId: "****************************************",
  storageBucket: "****************************************",
  messagingSenderId: "****************************************",
  appId: "****************************************"
};

const configFirebase = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default configFirebase;
export { db };
