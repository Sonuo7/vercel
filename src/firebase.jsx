import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPENNFgkrCeJyu82ZXPaWn5HeInVWho6k",
  authDomain: "alsamovies.firebaseapp.com",
  projectId: "alsamovies",
  storageBucket: "alsamovies.firebasestorage.app",
  messagingSenderId: "1030344126031",
  appId: "1:1030344126031:web:f69b97a07b8c95efb8443a",
  measurementId: "G-1YTC7MY13T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Auth and Firestore with the app instance
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
