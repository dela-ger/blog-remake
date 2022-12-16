import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDmTbRSdPsA3lmAYT7wh0__GnKxvhTW6kM",
    authDomain: "react-firebase-blog-1c74b.firebaseapp.com",
    projectId: "react-firebase-blog-1c74b",
    storageBucket: "react-firebase-blog-1c74b.appspot.com",
    messagingSenderId: "3924868012",
    appId: "1:3924868012:web:4dc3dedbbbe17684c45809"
  };

  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app)