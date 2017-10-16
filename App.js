import React from 'react';
import Login from './Login';

export default class App extends React.Component { // (1)
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

  render() { // (6)
    return (
      <Login onSubmitName={ this.handleSubmitName } />
    );
  }
}

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import styled from 'styled-components/native';

// const StyledView = styled.View`
//   flex: 1;
//   background-color: papayawhip;
//   align-items: center;
//   justify-content: center;
// `;

// const StyledText = styled.Text`
//   color: palevioletred;
// `;

// export default class App extends React.Component {
//   render() {
//     return (
//       <StyledView>
//         <StyledText>Open up App.js to start working on your app!</StyledText>
//         <StyledText>Changes you make will automatically reload.</StyledText>
//         <StyledText>Shake your phone to open the developer menu.</StyledText>
//       </StyledView>
//     );
//   }
// }

