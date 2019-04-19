import React, { Component } from 'react'
import { AppLoading, Asset, Font, Icon } from "expo";

import { Platform, StatusBar,StyleSheet, Text, View } from 'react-native';
import Main from './source/components/MainComponent'

export default class App extends Component {
  state = {
    isLoadingComplete: false,
    loading: false
  };
  async componentWillMount() {
    await Font.loadAsync({
      Feather: require("@expo/vector-icons/fonts/Feather.ttf")
    });
    this.setState({ loading: true });
  }
  render() {
    if (this.state.isLoadingComplete) {
      return (
        <View style={{marginTop:StatusBar.currentHeight }}>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <Main />
        </View>
      );
    }
    else {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      )
    }

  }
  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("./assets/splash.png"),
      ]),
      Font.loadAsync({
        Feather: require("@expo/vector-icons/fonts/Feather.ttf")
      })
    ]);
  };

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}


