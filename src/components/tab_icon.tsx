import { HeartStraight, HouseLine, IconProps } from 'phosphor-react-native';
import React from 'react';
import { Colors } from 'src/constants/theme';

type TabIconProps = {
	focused: boolean,
	icon: React.FC<IconProps>
}

function TabIcon(props: TabIconProps) {
	const { focused, icon: Icon } = props;
	const weight = focused ? 'fill' : 'bold';

	return <Icon weight={weight} color={Colors.WHITE} />;
}

export function HomeTabIcon(props: Pick<TabIconProps, 'focused'>) {
	const { focused } = props;

	return <TabIcon icon={HouseLine} focused={focused} />;
}

export function FavoritesTabIcon(props: Pick<TabIconProps, 'focused'>) {
	const { focused } = props;

	return <TabIcon icon={HeartStraight} focused={focused} />;
}