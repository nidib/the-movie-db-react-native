import { MagnifyingGlass } from 'phosphor-react-native';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'src/constants/theme/colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.BLACK,
	},
	inputContainer: {
		padding: 16,
	},
	inputWithIconContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#1C1C1E',
		borderRadius: 8,
		padding: 8,
	},
	magnifier: {
		marginRight: 6,
	},
	input: {
		flex: 1,
		color: Colors.WHITE,
		fontSize: 16,
	},
});

export function SearchScreen() {
	const [searchTerm, setSearchTerm] = useState('');

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.inputContainer}>
				<View style={styles.inputWithIconContainer}>
					<MagnifyingGlass color={Colors.WHITE} size={22} weight={'bold'} style={styles.magnifier} />
					<TextInput
						value={searchTerm}
						onChangeText={setSearchTerm}
						placeholder={'Search'}
						style={styles.input}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
}