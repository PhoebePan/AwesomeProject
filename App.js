import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styled from 'styled-components/native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return <HelloText>Hello, Navigation!</HelloText>;
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen }
});

export default class App extends React.Component {

  render() {
    return (
      <SimpleApp />
    );
  }
}

const HelloText = styled.Text`
  flex: 1;
  font-size: 36;
  background-color: #FFFFFF;
  align-items: center;
  justify-content: center;
`
