import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { HomePropsStack } from 'src/types/types';

export default function AllMoviesScreen() {
	const navigation = useNavigation<HomePropsStack>();
	const handleMovieItemClick = useCallback(() => {
		navigation.navigate('MovieDetailsScreen', { movieId: 200 });
	}, []);

	return (
		<SafeAreaView>
			<Text>{ 'All Movies' }</Text>
			<TouchableOpacity onPress={handleMovieItemClick}>
				<Text>{ 'Star Trek: Insurrection' }</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}