import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootNavigationStack } from 'src/@types';
import Services from 'src/services/services';
import { MovieDetailsScreen } from 'src/screens/movie_details_screen';

export function MovieDetailsModalNavigation(props: NativeStackScreenProps<RootNavigationStack, 'MovieDetailsModalScreen'>) {
	const { route } = props;
	const { movieId } = route.params;

	return <MovieDetailsScreen movieId={movieId} movieProvider={Services.getMovieWithDetails} />;
}