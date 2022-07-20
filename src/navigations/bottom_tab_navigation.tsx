import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { BottomNavigationStack } from 'src/@types';
import { FavoritesTabIcon, ExploreTabIcon, SearchTabIcon } from 'src/components/tab_icon';
import { Colors } from 'src/constants/theme/colors';
import { AllMoviesScreen } from 'src/screens/all_movies_screen';
import { FavoritesScreen } from 'src/screens/favorites_screen';
import { SearchScreen } from 'src/screens/search_screen';

const { Navigator: Tabs, Screen: Tab } = createBottomTabNavigator<BottomNavigationStack>();

const tabScreenOptions: BottomTabNavigationOptions = {
	tabBarShowLabel: false,
	tabBarStyle: { backgroundColor: Colors.BLACK },
	headerShown: false,
};
const exploreTabOptions: BottomTabNavigationOptions = { tabBarIcon: ExploreTabIcon, tabBarShowLabel: false };

const searchTabOptions: BottomTabNavigationOptions = { tabBarIcon: SearchTabIcon, tabBarShowLabel: false };

const favoritesTabOptions: BottomTabNavigationOptions = { tabBarIcon: FavoritesTabIcon, tabBarShowLabel: false };

export const exploreTabID = 'HomeTab';

export const searchTabID = 'SearchTab';

export const favoritesTabID = 'FavoritesTab';

export function BottomTabNavigation() {
	return (
		<Tabs screenOptions={tabScreenOptions}>
			<Tab name={exploreTabID} component={AllMoviesScreen} options={exploreTabOptions} />
			<Tab name={searchTabID} component={SearchScreen} options={searchTabOptions} />
			<Tab name={favoritesTabID} component={FavoritesScreen} options={favoritesTabOptions} />
		</Tabs>
	);
}