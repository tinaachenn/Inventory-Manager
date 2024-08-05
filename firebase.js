// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHd6Afolv2px4B5EC30zXs5Mh5D-1mCfA",
  authDomain: "inventory-manager-713cc.firebaseapp.com",
  projectId: "inventory-manager-713cc",
  storageBucket: "inventory-manager-713cc.appspot.com",
  messagingSenderId: "488398146374",
  appId: "1:488398146374:web:b1fa7c1150f4d208f1f347",
  measurementId: "G-6QQ1CVFM9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

// export default firestore;
export { firestore };
