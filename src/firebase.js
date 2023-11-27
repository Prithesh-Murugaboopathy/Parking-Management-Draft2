import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2bX3Q3m323o38pcOWvIPEVCje3pyZY_k",
  authDomain: "parking-management-7ef85.firebaseapp.com",
  databaseURL:
    "https://parking-management-7ef85-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "parking-management-7ef85",
  storageBucket: "parking-management-7ef85.appspot.com",
  messagingSenderId: "876027038190",
  appId: "1:876027038190:web:89be9652b89088dc77e6ff",
  measurementId: "G-VZ9WP3BVXM",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
