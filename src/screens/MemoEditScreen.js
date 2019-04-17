import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import Circle from '../elements/Circle';

class MemoEditScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>

          		<TextInput style={styles.memoEditInput} multiline value="Hi" />

          		<Circle onPress={() =>{this.props.navigation.goBack();}}>{'\uf00c'}</Circle>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		width:'100%',
	},
	memoEditInput: {
		backgroundColor: '#fff',
		flex:1,
		paddingTop:32,
		paddingLeft:20,
		paddingRight:20,
		paddingBottom:16,
		fontSize:18,
	},
});

export default MemoEditScreen;