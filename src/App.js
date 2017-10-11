import React, { Component } from 'react'
import { push } from 'react-router-redux'
import logo from './logo.svg'
import './App.css'
import RegistrationForm from './components/RegistrationForm'
import { store } from './store'
import firebase from 'firebase'


class App extends Component {

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('user logged',user)
        store.dispatch(push('/dashboard'))
      } else {
        console.log('no active user')
        store.dispatch(push('/'))
      }
    })
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
