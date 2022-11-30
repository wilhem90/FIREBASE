
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  

  import {getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"



  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBtwsrx-D2-msLhES5gE-64cM23AoIp2oQ",
    authDomain: "cashmax-d9f81.firebaseapp.com",
    projectId: "cashmax-d9f81",
    storageBucket: "cashmax-d9f81.appspot.com",
    messagingSenderId: "263911135046",
    appId: "1:263911135046:web:af85dcdf8d1420399f3747"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)