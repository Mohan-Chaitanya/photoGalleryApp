import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDzlztSwIRxdYfoRqPr_6_C_R_H9UD5TxA",
    authDomain: "login-auth-418b0.firebaseapp.com",
    projectId: "login-auth-418b0",
    storageBucket: "login-auth-418b0.appspot.com",
    messagingSenderId: "156296760988",
    appId: "1:156296760988:web:914490318db1a29f546759"
};

const fireAuth = firebase.initializeApp(firebaseConfig);
export default fireAuth;