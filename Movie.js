import React, {
  Component,
} from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import styled from 'styled-components/native';

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
          loaded: true,
        });
      })
      .done();
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderMovie}
        style={styles.listView}
      />
    );
  }

  renderLoadingView() {
    return (
      <ContainerView>
        <Text>
          Loading movies...
        </Text>
      </ContainerView>
    );
  }

  renderMovie(movie) {
    return (
      <ContainerView>
        <ThumbnailImage
          source={{uri: movie.posters.thumbnail}}
        />
        <RightContainerView>
          <TitleText>{movie.title}</TitleText>
          <Text style={styles.year}>{movie.year}</Text>
          
        </RightContainerView>
      </ContainerView>
    );
  }
}

const ContainerView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #F5FCFF;
`
const ThumbnailImage = styled.Image`
  width: 53;
  height: 81;
`
const RightContainerView = styled.View`
  flex: 1;
`
const TitleText = styled.Text`
  font-size: 20;
  margin-bottom: 8;
  text-align: center;
`

var styles = StyleSheet.create({
  year: {
    textAlign: 'center',
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  }
});
