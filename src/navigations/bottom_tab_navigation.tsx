import React from 'react';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigationStack } from 'src/@types';
import { Colors } from 'src/constants/theme';
import { AllMoviesScreen } from 'src/screens/all_movies_screen';
import { FavoritesScreen } from 'src/screens/favorites_screen';
import { FavoritesTabIcon, HomeTabIcon } from 'src/components/tab_icon';

const { Navigator: Tabs, Screen: Tab } = createBottomTabNavigator<BottomNavigationStack>();

const tabScreenOptions: BottomTabNavigationOptions = {
	tabBarShowLabel: false,
	tabBarStyle: { backgroundColor: Colors.BLACK },
};
const homeTabOptions: BottomTabNavigationOptions = { tabBarIcon: HomeTabIcon, tabBarShowLabel: false };

const favoritesTabOptions: BottomTabNavigationOptions = { tabBarIcon: FavoritesTabIcon, tabBarShowLabel: false };

export const homeTabID = 'HomeTab';

export const favoritesTabID = 'FavoritesTab';

export function BottomTabNavigation() {
	return (
		<Tabs screenOptions={tabScreenOptions}>
			<Tab name={homeTabID} component={AllMoviesScreen} options={homeTabOptions} />
			<Tab name={favoritesTabID} component={FavoritesScreen} options={favoritesTabOptions} />
		</Tabs>
	);
}