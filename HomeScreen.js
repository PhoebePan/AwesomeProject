import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import styled from 'styled-components/native';

const HelloText = styled.Text`
color: #79006E;
`
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome YueLoaBank',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <HelloText>Hello, Chat App!</HelloText>
        <Button
          onPress={() => navigate('Chat')}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}
