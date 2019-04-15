import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Circle from '../elements/Circle';

class MemoDetailScreen extends React.Component {
	render() {
		return (
		<View style={styles.container}>
			<View>
          		<View style={styles.memoHeader}>
          		<View>
          		<Text style={styles.memoHeaderTitle}>講座のアイデア</Text>
          		<Text style={styles.memoHeaderDate}>2019/4/20</Text>
          		</View>
          		</View>
          	</View>

          	<View style={styles.memoContent}>
          		<Text>講座のアイデアです。</Text>
          	</View>

          	<Circle color="white" style={styles.editButton}>
          	{'\uf303'}
          	</Circle>

		</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		width:'100%',
	},
	memoHeader: {
		height:120,
		backgroundColor:'#484848',
		justifyContent:'center',
		padding:15,
	},
	memoHeaderTitle: {
		fontSize:28,
		fontWeight:'bold',
		color:'#fff',
		marginBottom:5,
	},
	memoHeaderDate: {
		fontSize:15,
		color:'#fff',
	},
	memoContent: {
		paddingTop:40,
		paddingLeft:20,
		paddingRight:20,
	},
	editButton: {
		top:88,
	},
});

export default MemoDetailScreen;