import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCV1t6nYWaVXY4P5eiDdQ4Fyqreo0zVno4",
  authDomain: "react-native-login-1d69d.firebaseapp.com",
  projectId: "react-native-login-1d69d",
  storageBucket: "react-native-login-1d69d.firebasestorage.app",
  messagingSenderId: "567120635756",
  appId: "1:567120635756:web:4d97cb7da01a497ed0f549",
  measurementId: "G-CNYF9VZZMT"
};

export const app = initializeApp(firebaseConfig);
