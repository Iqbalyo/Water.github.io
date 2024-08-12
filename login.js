// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT8v-eAccRZx0crVmDjwJ3Z4NJ1239nvQ",
  authDomain: "fir-auth-17abd.firebaseapp.com",
  projectId: "fir-auth-17abd",
  storageBucket: "fir-auth-17abd.appspot.com",
  messagingSenderId: "674441718835",
  appId: "1:674441718835:web:17496354a2cf92dfbe8746",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//submit button
const submit = document.getElementById("signIn");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  //input data

  const email = document.getElementById("Email").value;
  const password = document.getElementById("Password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Loggin Succes...");
      window.location.href = 'userlogin.html'
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
});
