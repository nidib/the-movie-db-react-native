import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Colors } from 'src/constants/theme';
import { AllMoviesScreen, MovieDetailsScreenWrapper } from 'src/screens';
import { HomeNavigationStack } from 'src/types/types';

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
				<Screen name={'MovieDetailsScreen'} component={MovieDetailsScreenWrapper} options={movieDetailsScreenNavigationOptions} />
			</Group>
		</Navigator>
	);
}