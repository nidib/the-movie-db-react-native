import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Colors } from 'src/constants/theme';
import { RootNavigation } from './navigations/root_navigation';

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar barStyle={'light-content'} backgroundColor={Colors.BLACK} />
			<RootNavigation />
		</NavigationContainer>
	);
}