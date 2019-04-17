import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import firebase from 'firebase';

import MemoList from '../compornents/MemoList';
import Circle from '../elements/Circle';


class MemoListScreen extends React.Component {

	handlePress() {
		const { params } = this.props.navigation.state;
		this.props.navigation.navigate('MemoCreate' , { currentUser: params.currentUser});
	}

	render() {
		return (
			<View style={styles.container}>
          		<MemoList navigation={this.props.navigation} />
          		<Circle 
          		onPress={this.handlePress.bind(this)}>
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