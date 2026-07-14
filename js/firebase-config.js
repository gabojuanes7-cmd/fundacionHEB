import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// TODO: REEMPLAZA ESTO CON LA CONFIGURACIÓN DE TU PROYECTO FIREBASE
// Encontrarás esto en Firebase Console -> Configuración del proyecto -> General -> Tus apps
const firebaseConfig = {
  apiKey: "AIzaSyB8Dz7ZqZFAvpWah-073uUuK2Aa7NVi8D4",
  authDomain: "hecho-en-bolivia.firebaseapp.com",
  projectId: "hecho-en-bolivia",
  storageBucket: "hecho-en-bolivia.firebasestorage.app",
  messagingSenderId: "616310430469",
  appId: "1:616310430469:web:572c64d4703ee967d8b56c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
