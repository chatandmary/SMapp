import React from 'react';
import { StyleSheet, View, TextInput, TouchableHighlight,Text,ImageBackground } from 'react-native';

class SignUpScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
			
			<Text style={styles.title}>メンバー登録</Text>
			<TextInput style={styles.input} value="Email Address" />
			<TextInput style={styles.input} value="Passward" />
			<TouchableHighlight style={styles.button} title="送信" onPress={() => {}}　underlayColor="#7B8447">
				<Text style={styles.buttonTitle}>送信する</Text>
			</TouchableHighlight> 
			
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		width:"100%",
		padding:24,
		backgroundColor:'#fff',
	},
	input: {
		backgroundColor:'#eee',
		height:48,
		marginBottom:16,
		borderWidth:1,
		borderColor:'#ddd',
		padding:8,
	},
	title: {
		fontSize:28,
		alignSelf:'center',
		marginBottom:24,
	},
	button: {
		backgroundColor:'#7B8437',
		height:48,
		borderRadius:4,
		justifyContent:'center',
		alignItems:'center',
		width:'70%',
		alignSelf:'center',
	},
	buttonTitle: {
		color:'#fff',
		fontSize:18,
	},
});

export default SignUpScreen;