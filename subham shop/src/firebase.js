import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrmNK9gGFxLl_mFgD-QqFtHO24h_qL-1w",
  authDomain: "subham-shop-6267d.firebaseapp.com",
  projectId: "subham-shop-6267d",
  storageBucket: "subham-shop-6267d.firebasestorage.app",
  messagingSenderId: "727856467448",
  appId: "1:727856467448:web:54c146821a3eb7b2085a0d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
