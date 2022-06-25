import React from 'react';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeartStraight, HouseLine } from 'phosphor-react-native';
import { FavoritesScreen } from 'src/screens';
import { HomeStackNavigation } from 'src/navigations';
import { BottomNavigationStack } from 'src/types';
import { Colors } from 'src/constants/theme';

function getHomeTabIcon(props: { focused: boolean }) {
	const weight = props.focused ? 'fill' : 'bold';

	return <HouseLine weight={weight} color={Colors.WHITE} />;
}

function getFavoritesTabIcon(props: { focused: boolean }) {
	const weight = props.focused ? 'fill' : 'bold';

	return <HeartStraight weight={weight} color={Colors.WHITE} />;
}

const navigatorScreenOptions: BottomTabNavigationOptions = {
	headerShown: false,
	tabBarShowLabel: false,
	tabBarStyle: { backgroundColor: Colors.BLACK },
};
const homeTabOptions: BottomTabNavigationOptions = {
	tabBarIcon: getHomeTabIcon,
};
const favoritesTabOptions: BottomTabNavigationOptions = {
	tabBarIcon: getFavoritesTabIcon,
	headerTintColor: Colors.WHITE,
	headerStyle: { backgroundColor: Colors.BLACK },
	headerShown: true,
};
const { Navigator, Screen } = createBottomTabNavigator<BottomNavigationStack>();

export default function BottomTabNavigation() {
	return (
		<Navigator screenOptions={navigatorScreenOptions}>
			<Screen name={'Home'} component={HomeStackNavigation} options={homeTabOptions} />
			<Screen name={'Favorites'} component={FavoritesScreen} options={favoritesTabOptions} />
		</Navigator>
	);
}