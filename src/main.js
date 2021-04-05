import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBBsPYe2dpMV4AtYZwX0aCYJaJVHXkCJCw",
    authDomain: "peachapple-app.firebaseapp.com",
    projectId: "peachapple-app",
    storageBucket: "peachapple-app.appspot.com",
    messagingSenderId: "806834426113",
    appId: "1:806834426113:web:90cd9e5e61ba5cc6fb8b00",
    measurementId: "G-HHNLEQXQ25"
  };

  firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
