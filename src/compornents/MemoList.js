import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

class MemoList extends React.Component {
	render() {
		return (
			<View style={styles.memoList}>
				<TouchableHighlight onPress={() => {this.props.navigation.navigate('MemoDetail');}}> 
		            <View style={styles.memoListItem}>
		              <Text style={styles.memoTitle}>講座のアイテム</Text>
		              <Text style={styles.memoDate}>2019/4/20</Text>
		            </View>
	            </TouchableHighlight> 

	             <TouchableHighlight onPress={() => {this.props.navigation.navigate('MemoDetail');}}> 
		            <View style={styles.memoListItem}>
		              <Text style={styles.memoTitle}>講座のアイテム</Text>
		              <Text style={styles.memoDate}>2019/4/20</Text>
		            </View>
	            </TouchableHighlight> 

	            <TouchableHighlight onPress={() => {this.props.navigation.navigate('MemoDetail');}}> 
		            <View style={styles.memoListItem}>
		              <Text style={styles.memoTitle}>講座のアイテム</Text>
		              <Text style={styles.memoDate}>2019/4/20</Text>
		            </View>
	            </TouchableHighlight> 

	            <TouchableHighlight onPress={() => {this.props.navigation.navigate('MemoDetail');}}> 
		            <View style={styles.memoListItem}>
		              <Text style={styles.memoTitle}>講座のアイテム</Text>
		              <Text style={styles.memoDate}>2019/4/20</Text>
		            </View>
	            </TouchableHighlight> 

	            <TouchableHighlight onPress={() => {this.props.navigation.navigate('MemoDetail');}}> 
		            <View style={styles.memoListItem}>
		              <Text style={styles.memoTitle}>講座のアイテム</Text>
		              <Text style={styles.memoDate}>2019/4/20</Text>
		            </View>
	            </TouchableHighlight> 

	        </View>
		);
	}
}

const styles = StyleSheet.create({
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
});

export default MemoList;



