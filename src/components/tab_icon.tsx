import { HeartStraight, Compass, MagnifyingGlass } from 'phosphor-react-native';
import React from 'react';
import { TabIconProps } from 'src/@types';
import { Colors } from 'src/constants/theme/colors';

function TabIcon(props: TabIconProps) {
	const { focused, icon: Icon } = props;
	const weight = focused ? 'fill' : 'bold';

	return <Icon weight={weight} color={Colors.WHITE} />;
}

export function ExploreTabIcon(props: Pick<TabIconProps, 'focused'>) {
	const { focused } = props;

	return <TabIcon icon={Compass} focused={focused} />;
}

export function SearchTabIcon(props: Pick<TabIconProps, 'focused'>) {
	const { focused } = props;

	return <TabIcon icon={MagnifyingGlass} focused={focused} />;
}

export function FavoritesTabIcon(props: Pick<TabIconProps, 'focused'>) {
	const { focused } = props;

	return <TabIcon icon={HeartStraight} focused={focused} />;
}