import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
    apiKey: "AIzaSyB3ZVPT2Yx9NGJAIEfHw-GoEqUM_EVRtHc",
    authDomain: "ecommerce-11093.firebaseapp.com",
    databaseURL: "https://ecommerce-11093.firebaseio.com",
    projectId: "ecommerce-11093",
    storageBucket: "ecommerce-11093.appspot.com",
    messagingSenderId: "115387534024",
    appId: "1:115387534024:web:81e9670ea4cbf51422f3fd",
    measurementId: "G-N2SMG325JC"
};
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);



    // export
   export const auth = firebase.auth();
   export const firestore = firebase.firestore();
    export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

    export default firebase;

