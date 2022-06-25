import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { Colors } from './constants/theme';
import { BottomTabNavigation } from './navigations';

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar backgroundColor={Colors.BLACK} barStyle={'light-content'} />
			<BottomTabNavigation />
		</NavigationContainer>
	);
}