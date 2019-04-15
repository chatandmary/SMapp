import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MemoList from './src/compornents/MemoList';
import Appbar from './src/compornents/Appbar';
import Circle from './src/elements/Circle';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

          <Appbar />
          <MemoList />
          <Circle>+</Circle>

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





