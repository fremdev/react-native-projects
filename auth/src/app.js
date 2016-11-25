import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { firebaseConfig } from './config/config';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    return (
      <View>
        <Header headerText='Authentification' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
