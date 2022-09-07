import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9XEhIDzfgtXEeOxHLu-sJkBM2TneiPEI",
  authDomain: "reactquiz-a3f20.firebaseapp.com",
  projectId: "reactquiz-a3f20",
  storageBucket: "reactquiz-a3f20.appspot.com",
  messagingSenderId: "557013292676",
  appId: "1:557013292676:web:49f167315d1c896ca894d1"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);