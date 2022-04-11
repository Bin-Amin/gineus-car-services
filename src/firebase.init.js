// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAu-pni5WWOBCNrc2g8Ky2GquEl3tpdXjk",
    authDomain: "genius-car-services-976fc.firebaseapp.com",
    projectId: "genius-car-services-976fc",
    storageBucket: "genius-car-services-976fc.appspot.com",
    messagingSenderId: "401358044623",
    appId: "1:401358044623:web:d5250236adf74fe30c66ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;