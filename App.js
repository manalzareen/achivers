import  React, { Component } from 'react';
import StackNavigator from './navigations/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

import CreateReport from "./screens/CreateReport"
import firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>

    );
  }
}
