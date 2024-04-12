import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQ2LCOqLUUUYGHyY795ea3NeH76CGUM2Q",
  authDomain: "react-blog-bd7c1.firebaseapp.com",
  projectId: "react-blog-bd7c1",
  storageBucket: "react-blog-bd7c1.appspot.com",
  messagingSenderId: "403328156050",
  appId: "1:403328156050:web:9a868a2f307ad5e921814b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
