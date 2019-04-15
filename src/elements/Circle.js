import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Circle extends React.Component {
	render() {
		const { style, color} = this.props;

		let bgColor = '#7B8437';
		let textColor = '#fff';

		if (color === 'white') {
			bgColor = '#fff';
			textColor = '#7B8437';
		}

		return (
			<View style={[styles.memoAddButton, style,{backgroundColor: bgColor} ]}>
              <Text style={[styles.memoAddButtonTitle,{color: textColor}]}>
              {this.props.children}
              </Text>
          </View>
		);
	}
}

const styles = StyleSheet.create({
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

export default Circle;