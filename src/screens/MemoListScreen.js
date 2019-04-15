import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MemoList from '../compornents/MemoList';
import Circle from '../elements/Circle';

class MemoListScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
          		<MemoList />
          		<Circle>
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