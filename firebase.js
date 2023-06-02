import firebase from 'firebase/app';
import {initializeApp} from 'firebase/app'
// import firestore from 'firebase/firestore';
import { getFirestore} from 'firebase/firestore/lite';
import { getAuth , GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB0TmBHNfUyARPqCt0RQXAiQgU9LubSLmc",
  authDomain: "whatsappmychat-37592.firebaseapp.com",
  projectId: "whatsappmychat-37592",
  storageBucket: "whatsappmychat-37592.appspot.com",
  messagingSenderId: "559719099244",
  appId: "1:559719099244:web:b40e88ea3a6b13a3f1e149"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export {  auth , db , provider };