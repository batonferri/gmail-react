import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBIQVprTvst68dQrdCgJ1uaI3cxtErNmp8",
  authDomain: "project-f6f32.firebaseapp.com",
  projectId: "project-f6f32",
  storageBucket: "project-f6f32.appspot.com",
  messagingSenderId: "923133848339",
  appId: "1:923133848339:web:a170eda1e4ace920d2c8e6"
};


const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();

