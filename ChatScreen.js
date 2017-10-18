import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import styled from 'styled-components/native';

const HelloText = styled.Text`
color: #79006E;
`

export default class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  render() {
    return (
      <View>
        <HelloText>Hi, Lucy! </HelloText>
      </View>
    );
  }
}
