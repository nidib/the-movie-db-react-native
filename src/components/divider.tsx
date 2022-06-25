import React from 'react';
import { View } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import { DividerProps } from 'src/types/types';

function Divider(props: DividerProps) {
	const { color, width } = props;

	return (
		<View>
			<Svg width={width} height={2}>
				<Rect
					height={2}
					width={width}
					fill={color}
				/>
			</Svg>
		</View>
	);
}

Divider.defaultProps = {
	color: '#FFFFFF20',
	width: 240,
};

export default Divider;