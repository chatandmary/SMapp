import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Appbar extends React.Component {
	render() {
		return (
			<View style={styles.appbar}>
            <View>
              <Text style={styles.appbarTitle}>Suvival Memo</Text>
            </View>
          </View>
		);
	}
}

const styles = StyleSheet.create({
	  appbar: {
    backgroundColor: '#7B8437',
    height: 100,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingTop:30,
    justifyContent:'center',
    alignItems:'center',
  },
  appbarTitle: {
    color: '#fff',
    fontSize: 24,
  },
});

export default Appbar;