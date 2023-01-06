import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Colors } from 'src/constants/theme/colors';
import { Spacing } from 'src/constants/theme/spacing';

type CategoryTitleProps = {
	title: string
}

const styles = StyleSheet.create({
	text: {
		fontSize: 28,
		paddingLeft: Spacing.SPACING_1,
		paddingVertical: Spacing.SPACING_2,
		backgroundColor: Colors.BLACK,
		color: Colors.WHITE,
	},
});

export function CategoryTitle(props: CategoryTitleProps) {
	const { title } = props;

	return (
		<Text style={styles.text}>
			{ title }
		</Text>
	);
}