import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: 'AIzaSyACnGQOjjy3aSIgQ6EIc9vYid5P09eHnYM',
  authDomain: 'maltimart-61251.firebaseapp.com',
  projectId: 'maltimart-61251',
  storageBucket: 'maltimart-61251.appspot.com',
  messagingSenderId: '732382842411',
  appId: '1:732382842411:web:fd30f90e26a0b95e66a46e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
