import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { Movie } from '../models';
import { HomePropsStack } from '../types/types';
import { MOVIE_MOCK } from '../_temp/mocks';

export default function AllMoviesScreen() {
	const navigation = useNavigation<HomePropsStack>();
	const handleMovieItemClick = useCallback(() => {
		navigation.navigate('MovieDetailsScreen', {
			movieId: 200,
			movieProvider: _movieId => Promise.resolve(new Movie(MOVIE_MOCK)),
		});
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