import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALuuzC_lC0svvG7ZVmXF-jv2R2mAjNnnM",
  authDomain: "auth-darkmode.firebaseapp.com",
  projectId: "auth-darkmode",
  storageBucket: "auth-darkmode.appspot.com",
  messagingSenderId: "743126832977",
  appId: "1:743126832977:web:dfab754590ce6db9da2570",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
