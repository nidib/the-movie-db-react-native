import { ArrowRight } from 'phosphor-react-native';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from 'src/constants/theme/colors';
import { Spacing } from 'src/constants/theme/spacing';

const styles = StyleSheet.create({
	button: {
		borderWidth: 1,
		borderColor: 'white',
		padding: Spacing.SPACING_2,
		borderRadius: Spacing.SPACING_5,
	},
});

const noop = () => {};

export function ViewMore() {
	return (
		<TouchableOpacity onPress={noop} style={styles.button}>
			<ArrowRight color={Colors.WHITE} />
		</TouchableOpacity>
	);
}