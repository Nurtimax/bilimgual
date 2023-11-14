// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: 'AIzaSyAvEC8iNqLRhP24Flj0yZyOiPJ1HsFq3G8',
   authDomain: 'bilingual-b4413.firebaseapp.com',
   projectId: 'bilingual-b4413',
   storageBucket: 'bilingual-b4413.appspot.com',
   messagingSenderId: '784606818444',
   appId: '1:784606818444:web:5de0dec278bedaca8f0ba9',
   measurementId: 'G-V4WF9Z7HM5'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);

export default app;
