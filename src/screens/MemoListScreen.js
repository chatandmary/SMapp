import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MemoList from '../compornents/MemoList';
import Circle from '../elements/Circle';

class MemoListScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
          		<MemoList navigation={this.props.navigation} />
          		<Circle onPress={() =>{this.props.navigation.navigate('MemoEdit');}}>
          		{'\uf067'}
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
});

export default MemoListScreen;