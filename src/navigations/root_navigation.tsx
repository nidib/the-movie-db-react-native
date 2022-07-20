import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import React from 'react';
import { RootNavigationStack } from 'src/@types';
import { MainNavigation } from 'src/navigations/main_navigation';
import { MovieDetailsModalNavigation } from 'src/navigations/movie_details_modal_navigation';

const { Navigator: RootNavigator, Screen: RootScreen } = createNativeStackNavigator<RootNavigationStack>();
const mainScreenOptions: NativeStackNavigationOptions = { headerShown: false };
const movieDetailsModalOptions: NativeStackNavigationOptions = { presentation: 'modal', headerShown: false, gestureEnabled: true };

export const mainScreenID = 'MainScreen' as const;
export const movieDetailsModalScreenID = 'MovieDetailsModalScreen' as const;

export function RootNavigation() {
	return (
		<RootNavigator initialRouteName={mainScreenID}>
			<RootScreen name={mainScreenID} component={MainNavigation} options={mainScreenOptions} />
			<RootScreen name={movieDetailsModalScreenID} component={MovieDetailsModalNavigation} options={movieDetailsModalOptions} />
		</RootNavigator>
	);
}