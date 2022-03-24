import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAF8ExMHA1-TESmgJDYeVzCQj7DtyVUcfQ",
    authDomain: "auth-production-21219.firebaseapp.com",
    projectId: "auth-production-21219",
    storageBucket: "auth-production-21219.appspot.com",
    messagingSenderId: "9502892813",
    appId: "1:9502892813:web:28d55011eff6c9ebec0644"
  }; //if publishing use env vars

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);