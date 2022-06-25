import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Colors } from '../constants/theme';
import { AllMoviesScreen, MovieDetailsScreen } from '../screens';
import { HomeNavigationStack } from '../types/types';

const { Group, Navigator, Screen } = createNativeStackNavigator<HomeNavigationStack>();
const homeStackNavigationOptions: NativeStackNavigationOptions = {
	headerTintColor: Colors.WHITE,
	headerStyle: { backgroundColor: Colors.BLACK },
	headerBackTitleVisible: false,
};
const movieDetailsNavigationOptions: NativeStackNavigationOptions = {
	presentation: 'modal',
	headerShown: false,
	gestureEnabled: true,
};
const allMoviesScreenNavigationOptions: NativeStackNavigationOptions = {
	title: 'All movies',
};
const movieDetailsScreenNavigationOptions: NativeStackNavigationOptions = {
	title: 'Movie details',
};

export default function HomeStackNavigation() {
	return (
		<Navigator>
			<Group screenOptions={homeStackNavigationOptions}>
				<Screen name={'AllMoviesScreen'} component={AllMoviesScreen} options={allMoviesScreenNavigationOptions} />
			</Group>
			<Group screenOptions={movieDetailsNavigationOptions}>
				<Screen name={'MovieDetailsScreen'} component={MovieDetailsScreen} options={movieDetailsScreenNavigationOptions} />
			</Group>
		</Navigator>
	);
}