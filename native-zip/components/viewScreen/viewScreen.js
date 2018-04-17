import React from 'react';
import { StyleSheet, Text, View , Button , WebView } from 'react-native';
import { zip, unzip, unzipAssets, subscribe } from 'react-native-zip-archive';
import { StackNavigator } from 'react-navigation';
import Expo from 'expo';


import HomeScreen from '../homeScreen/homeScreen';

class ViewScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style = {styles.container}>
        <Text onPress = { ()=> navigate('Home') }> Navigate to Home
        </Text>
      </View>
    );
  }
}

const NavigationApp = StackNavigator({

  Home : { screen : HomeScreen },
  Profile : { screen : ViewScreen },

},{
  navigationOptions : {
    headerStyle : {
      marginTop : Expo.Constants.statusBarHeight
      }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default ViewScreen;
