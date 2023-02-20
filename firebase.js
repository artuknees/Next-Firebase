// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/forestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHBsBMcLHTVHHj5WSgZponpNfBaA7GZHs",
  authDomain: "gastos-casa-ea757.firebaseapp.com",
  projectId: "gastos-casa-ea757",
  storageBucket: "gastos-casa-ea757.appspot.com",
  messagingSenderId: "605311454814",
  appId: "1:605311454814:web:a45f7d762941a583256ecf"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// export const database = getFirestore(app);
export default firebaseApp;