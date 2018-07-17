import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm.js';


class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCBfLA7_--sKivsjPBEnf0Cvx3rwrg48ws',
      authDomain: 'auth-801fc.firebaseapp.com',
      databaseURL: 'https://auth-801fc.firebaseio.com',
      projectId: 'auth-801fc',
      storageBucket: 'auth-801fc.appspot.com',
      messagingSenderId: '155948434714'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
            <View style={{ flexDirection: 'row' }}>
              <Button onPress={() => firebase.auth().signOut()}>
                Log Out
                </Button>
            </View>
        );

      case false:
        return <LoginForm />;

      default:
        return (
          <View style={{ flexDirection: 'row' }}>
            <Spinner size='large' />
          </View>
        );
    }
  }


 render() {
   return (
     <View>
       <Header headerText="Authentication" />
       {this.renderContent()}
     </View>
   );
 }
}

export default App;
