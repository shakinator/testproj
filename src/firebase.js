
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAfW_6dmMmmUZTo5Oilsg1DZaA5tkE81tY",
    authDomain: "clone-81a7e.firebaseapp.com",
    projectId: "clone-81a7e",
    storageBucket: "clone-81a7e.appspot.com",
    messagingSenderId: "686432281529",
    appId: "1:686432281529:web:a8658d964157649c968c68",
    measurementId: "G-06GEWJC5T7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();



export {auth};

  

