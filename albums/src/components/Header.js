//import libraries for making components
import React from 'react';
import { Text, View } from 'react-native';


//Make component
const Header = (props) => {

	const { textStyle , viewStyle } = styles;


	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{ props.headerText }</Text>
		</View>
	);
};

	const styles = {

	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifiedContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 33, 
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.5,
		elevation: 2,
		position: 'relative'

	}, 

	textStyle: {
		fontSize: 20
	}
};


//Make component available to program
export default Header;

