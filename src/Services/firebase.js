import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDTCiFhVl-uSkiszFjsj6VZWk3zqVR37pI",
  authDomain: "clone-77672.firebaseapp.com",
  projectId: "clone-77672",
  storageBucket: "clone-77672.appspot.com",
  messagingSenderId: "647067174006",
  appId: "1:647067174006:web:d250cc2f1df113e9194b57",
  measurementId: "G-1G1BLK8CM1",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const fbStorage = firebase.storage();

export const fbAuth = firebase.auth();

export const fbStore = firebase.firestore();

export default firebase;
