import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { firebaseConfig } from './config/config';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null
    };
  }

  componentWillMount() {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  onLogout() {
    firebase.auth().signOut();
  }

  renderContent() {
    if (this.state.loggedIn === null) {
      return <Spinner />;
    }
    if (this.state.loggedIn === false) {
      return <LoginForm />;
    }
    return (
      <CardSection>
        <Button onPress={this.onLogout.bind(this)} text='Log Out' />
      </CardSection>
    );
  }

  render() {
    return (
      <View>
        <Header headerText='Authentification' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
