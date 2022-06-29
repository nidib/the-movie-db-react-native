import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { BottomNavigationStack } from 'src/@types';
import { FavoritesTabIcon, HomeTabIcon } from 'src/components/tab_icon';
import { Colors } from 'src/constants/theme/colors';
import { AllMoviesScreen } from 'src/screens/all_movies_screen';
import { FavoritesScreen } from 'src/screens/favorites_screen';

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