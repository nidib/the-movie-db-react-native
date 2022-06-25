import React, { useCallback, useEffect, useState } from 'react';
import {
	SafeAreaView,
	ScrollView,
	Text,
	TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MovieByGenre } from 'src/models/movie_by_genre';
import Services from 'src/services/services';
import { HomePropsStack, Optional } from 'src/types';
import { Logger } from 'src/utils/helpers';

export default function AllMoviesScreen() {
	const navigation = useNavigation<HomePropsStack>();
	const [movies, setMovies] = useState<Optional<MovieByGenre[]>>([]);
	const handleMovieItemClick = useCallback((movieId: string | number) => {
		navigation.navigate('MovieDetailsScreen', { movieId });
	}, []);

	useEffect(() => {
		Services.getMoviesByGenre(16)
			.then(setMovies)
			.catch(Logger.error);
	}, []);

	if (!movies) {
		return <Text>{ 'Something went wrong while getting the movies' }</Text>;
	}

	return (
		<SafeAreaView>
			<ScrollView>
				<Text>{ `All Moviess (${movies.length})` }</Text>
				{
					movies.map(movie => (
						<TouchableOpacity key={movie.id} style={{ paddingVertical: 8 }} onPress={() => handleMovieItemClick(movie.id)}>
							<Text>{ movie.id }</Text>
						</TouchableOpacity>
					))
				}
			</ScrollView>
		</SafeAreaView>
	);
}