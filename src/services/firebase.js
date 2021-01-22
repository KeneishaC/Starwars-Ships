import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCbwJFjzruaBY0BpjxYaOGND0U3HNkKx04",
    authDomain: "starwarsify-882bb.firebaseapp.com",
    projectId: "starwarsify-882bb",
    storageBucket: "starwarsify-882bb.appspot.com",
    messagingSenderId: "556418576250",
    appId: "1:556418576250:web:6f6edf737e1cd8708170c3"
  };

  firebase.initializeApp(firebaseConfig);


  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const auth = firebase.auth();

  function login() {
    return auth.signInWithPopup(googleProvider)
  }

  function logout() {
    return auth.signOut();
  }

  export {
      login, 
      logout, 
      auth
  }