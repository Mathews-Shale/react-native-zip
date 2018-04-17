import React from 'react';
import { StyleSheet, Text, View , Button } from 'react-native';
import { zip, unzip, unzipAssets, subscribe } from 'react-native-zip-archive';
import { StackNavigator } from 'react-navigation';
import Expo from 'expo';

// components



import HomeScreen from './components/homeScreen/homeScreen';

const NavigationApp = StackNavigator({
  Home: { screen: HomeScreen },
  Profile : { screen : ViewScreen },

},{
  navigationOptions : {
    headerStyle : {
      marginTop : Expo.Constants.statusBarHeight
      }
  }
});



export default class App extends React.Component {
  render () {
    return <NavigationApp />
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
