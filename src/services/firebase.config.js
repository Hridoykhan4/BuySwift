import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDGdgD9WOmP8_ypdffDRaiFD5qpzIJAls",
  authDomain: "buyswift-3fdac.firebaseapp.com",
  projectId: "buyswift-3fdac",
  storageBucket: "buyswift-3fdac.appspot.com",
  messagingSenderId: "924180355342",
  appId: "1:924180355342:web:246fbfe402acb825f11f5f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
