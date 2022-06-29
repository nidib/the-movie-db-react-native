import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootNavigationStack } from 'src/@types';
import { MovieDetailsScreen } from 'src/screens/movie_details_screen';
import { Services } from 'src/services/services';

export function MovieDetailsModalNavigation(props: NativeStackScreenProps<RootNavigationStack, 'MovieDetailsModalScreen'>) {
	const { route } = props;
	const { movieId } = route.params;

	return <MovieDetailsScreen movieId={movieId} movieProvider={Services.getMovieWithDetails} />;
}