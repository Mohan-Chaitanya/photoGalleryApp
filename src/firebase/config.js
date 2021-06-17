import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAKAsXVXX4HXHOD3649tQREA5HBGtN9dyk",
    authDomain: "react-photogallery-5fec1.firebaseapp.com",
    projectId: "react-photogallery-5fec1",
    storageBucket: "react-photogallery-5fec1.appspot.com",
    messagingSenderId: "28540600360",
    appId: "1:28540600360:web:493e142f883312dc3a751d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp();

export { projectFirestore, projectStorage, timeStamp }