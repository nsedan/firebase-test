import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBi2poxSsL7I8UQoeH1JrD5dbFKhA13t54",
    authDomain: "resume-279909.firebaseapp.com",
    projectId: "resume-279909",
    storageBucket: "resume-279909.appspot.com",
    messagingSenderId: "5618863484",
    appId: "1:5618863484:web:9a129b5257981dc413a8f9",
    measurementId: "G-D9DFPW1H91"
};
const fireb = firebase.initializeApp(config);
const store = fireb.firestore();

export { store };