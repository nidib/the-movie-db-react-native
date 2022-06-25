import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Colors } from 'src/constants/theme';
import { BottomTabNavigation } from 'src/navigations';

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar barStyle={'light-content'} backgroundColor={Colors.BLACK} />
			<BottomTabNavigation />
		</NavigationContainer>
	);
}