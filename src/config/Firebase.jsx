// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//-----------------------------------------------------------------------------------------
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
