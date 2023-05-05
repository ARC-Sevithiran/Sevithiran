import {getAuth} from "firebase/auth"
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAlzffdOf7WMPhZDXP8aXFn_gKClLbS-bM",
  authDomain: "arc-phase1-sevithiran.firebaseapp.com",
  projectId: "arc-phase1-sevithiran",
  storageBucket: "arc-phase1-sevithiran.appspot.com",
  messagingSenderId: "184530392805",
  appId: "1:184530392805:web:b802e927156853bd91e60c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

