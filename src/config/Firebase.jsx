import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
//-----------------------------------------------------------------------------------------
const firebaseConfig = {
  apiKey: "AIzaSyDk1vjOq7lJRzIRu7ZYttKi8j9Xp2SY5A8",
  authDomain: "fir-course-616d9.firebaseapp.com",
  projectId: "fir-course-616d9",
  storageBucket: "fir-course-616d9.appspot.com",
  messagingSenderId: "453267435477",
  appId: "1:453267435477:web:1aa62502f25ba5fab0575c",
  measurementId: "G-4WK3KNWC90",
};
//-----------------------------------------------------------------------------------------
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const database = getFirestore(app);
// const analytics = getAnalytics(app);
