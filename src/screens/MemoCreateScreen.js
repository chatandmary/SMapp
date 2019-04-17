import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import firebase from 'firebase';

import Circle from '../elements/Circle';

class MemoCreateScreen extends React.Component {

	state = {
		body: '',
	}

	hundlePress(){
		const { params } = this.props.navigation.state;
		const db = firebase.firestore();
		db.collection(`users/${params.currentUser.uid}/memos`).add({
			body: this.state.body,
			createdOn: new Date(),
		})
		.then((docRef) => {
			console.log(docRef.id);
		})
		.catch((error) => {
			console.log(error);
		});
	}

	render() {
		return (
			<View style={styles.container}>

          		<TextInput
          		style={styles.memoEditInput}
          		multiline
          		value={this.state.body}
          		onChangeText={(text) => { this.setState({ body: text }); }}
          		/>

          		<Circle 
          		onPress={this.hundlePress.bind(this)}>
          		{'\uf00c'}
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

export default MemoCreateScreen;