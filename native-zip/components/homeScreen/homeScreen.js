import React from 'react';
import { StyleSheet, Text, View , Button } from 'react-native';
import { zip, unzip, unzipAssets, subscribe } from 'react-native-zip-archive';
import { StackNavigator } from 'react-navigation';
import Expo from 'expo';

// components

import ViewScreen from '../viewScreen/viewScreen';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
        <View style = {styles.container}>
          <Text
           onPress = { ()=> navigate('Profile') }> Navigate to Profile
          </Text>
        </View>
    );
  }
}

const NavigationApp = StackNavigator({

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

export default HomeScreen;
