import React, { useState, useEffect } from 'react'
import './App.css';
import Title from "./components/Title"
import UploadPhoto from "./components/uploadPhoto"
import ImageGrid from './components/ImageGrid'
import Modal from './components/Modal'
import fireAuth from './firebase/fireAuth'
import Login from "./Login"

function App() {

  const [seletedImg, setSelectedImg] = useState(null);
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [valiedAccount, setValiedAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('')
  }

  const clearErrors = () => {
    setEmailError('');
    setPassword('');
  }

  const handleLogin = () => {
    clearErrors();
    fireAuth
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case 'auth/invalid-email':
          case 'auth/user-not-found':
          case 'auth/user-disabled':
            setEmailError(err.message);
            break;
          case 'auth/invalid-password':
            setPasswordError(err.message);
            break;
        }
      })
  }

  const handleSignup = () => {
    fireAuth
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setEmailError(err.message);
            break;
          case 'auth/weak-password':
            setPasswordError(err.message);
            break;
        }
      })
  }

  const handleLogout = () => {
    fireAuth.auth().signOut();
  }

  const authListener = () => {
    fireAuth.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser('');
      }
    })
  }

  useEffect(() => {
    authListener();
  }, [])

  return (
    <div className="App">
      <Login />
      <Title />
      <UploadPhoto />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {seletedImg && <Modal seletedImg={seletedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;
