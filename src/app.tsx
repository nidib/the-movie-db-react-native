import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { Colors } from 'src/constants/theme/colors';
import { RootNavigation } from 'src/navigations/root_navigation';

export function App() {
	return (
		<NavigationContainer>
			<StatusBar barStyle={'light-content'} backgroundColor={Colors.BLACK} />
			<RootNavigation />
		</NavigationContainer>
	);
}