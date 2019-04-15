import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

          <View style={styles.appbar}>
            <View>
              <Text style={styles.appbarTitle}>Suvival Memo</Text>
            </View>
          </View>
      
          <View style={styles.memoList}>
            <View style={styles.memoListItem}>
              <Text style={styles.memoTitle}>講座のアイテム</Text>
              <Text style={styles.memoDate}>2019/4/20</Text>
            </View>

             <View style={styles.memoListItem}>
              <Text style={styles.memoTitle}>講座のアイテム</Text>
              <Text style={styles.memoDate}>2019/4/20</Text>
            </View>

             <View style={styles.memoListItem}>
              <Text style={styles.memoTitle}>講座のアイテム</Text>
              <Text style={styles.memoDate}>2019/4/20</Text>
            </View>

             <View style={styles.memoListItem}>
              <Text style={styles.memoTitle}>講座のアイテム</Text>
              <Text style={styles.memoDate}>2019/4/20</Text>
            </View>

             <View style={styles.memoListItem}>
              <Text style={styles.memoTitle}>講座のアイテム</Text>
              <Text style={styles.memoDate}>2019/4/20</Text>
            </View>

          </View>

          <View style={styles.memoAddButton}>
            <Text style={styles.memoAddButtonTitle}>+</Text>
          </View>

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
  appbar: {
    backgroundColor: '#7B8437',
    height: 100,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingTop:30,
    justifyContent:'center',
    alignItems:'center',
  },
  appbarTitle: {
    color: '#fff',
    fontSize: 24,
  },
  memoList: {
    width: '100%',
    flex:1,
  },
  memoListItem: {
    padding: 30,
    paddingLeft:20,
    borderBottomWidth:1,
    borderBottomColor: '#7B8437',
  },
  memoTitle: {
    fontSize:24,
    paddingBottom:5,
  },
  memoDate: {
    fontSize:16,
  },
  memoAddButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width:60,
    height:60,
    backgroundColor:'#7B8437',
    borderRadius:30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor:'#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  memoAddButtonTitle: {
    fontSize: 35,
    color:'#fff',
    lineHeight:35,
  },
});





