import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Appbar from './src/compornents/Appbar';
import SignUpScreen from './src/screens/SignUpScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Appbar />
          <SignUpScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:100,
  },
});





