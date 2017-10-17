import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import Login from './Login';

export default class App extends React.Component {
  constructor(props) {
    super(props); // (2)
    this.handleSubmitName = this.onSubmitName.bind(this); // (3)
    this.state = { // (4)
      hasName: false
    };
  }

  onSubmitName(e) { // (5)
    const name = e.nativeEvent.text;
    this.setState({
      name,
      hasName: true
    });
  }

  render() {
    return (
      <StyledView>
        <Login onSubmitName={ this.handleSubmitName } />
        <StyledText>Open up App.js to start working on your app!</StyledText>
        <StyledText>Changes you make will automatically reload.</StyledText>
        <StyledText>Shake your phone to open the developer menu.</StyledText>
      </StyledView>
    );
  }
}

const StyledView = styled.View`
  flex: 1;
  background-color: papayawhip;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  color: palevioletred;
`;

