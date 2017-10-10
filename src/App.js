import React, { Component } from 'react'
import firebase from 'firebase'
import logo from './logo.svg'
import './App.css'
import RegistrationForm from './components/RegistrationForm'

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyC-s5uepmXmH83Rn8PN5VVR_PCh5z-fHV4",
      authDomain: "redux-test-6b112.firebaseapp.com",
      databaseURL: "https://redux-test-6b112.firebaseio.com",
      projectId: "redux-test-6b112",
      storageBucket: "redux-test-6b112.appspot.com",
      messagingSenderId: "338295456"
    }
    
    firebase.initializeApp(config)
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, login or signup.
          </p>
          <RegistrationForm />
        </div>
    );
  }
}

export default App
