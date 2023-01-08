import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootNavigationStack } from 'src/@types';
import { MovieDetailsScreen } from 'src/screens/movie_details_screen';

type MovieDetailsModalNavigationProps = NativeStackScreenProps<RootNavigationStack, 'MovieDetailsModalScreen'>;

export function MovieDetailsModalNavigation(props: MovieDetailsModalNavigationProps) {
	const { route } = props;
	const { movieId } = route.params;

	return <MovieDetailsScreen movieId={movieId} />;
}