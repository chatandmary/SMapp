import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Font } from 'expo';
import { createIconSet } from '@expo/vector-icons';
import FontAwesome from '../../assets/fa-solid-900.ttf';


class Circle extends React.Component {

   state = {
    fontLoaded: false,
  };
	
  async componentDidMount() {
    await Font.loadAsync({
      'FontAwesome':FontAwesome,
    });

     this.setState({ fontLoaded: true });
  }

  render() {
		const { style, color, onPress} = this.props;

		let bgColor = '#7B8437';
		let textColor = '#fff';

		if (color === 'white') {
			bgColor = '#fff';
			textColor = '#7B8437';
		}

		return (
      <TouchableHighlight style={[styles.contianer, style]} onPress={onPress} underlayColor="transparent">
			<View style={[styles.memoAddButton,{backgroundColor: bgColor} ]}>
              {
                this.state.fontLoaded ? (
                  <Text style={[styles.memoAddButtonTitle,{color: textColor}]}>
              {this.props.children}
              </Text>
              ) : null
              }
          </View>
          </TouchableHighlight>
		);
	}
}

const styles = StyleSheet.create({
  contianer: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width:60,
    height:60,
  },
	memoAddButton: {
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
    fontFamily:'FontAwesome',
    fontSize: 30,
    color:'#fff',
    lineHeight:35,
  },
});

export default Circle;