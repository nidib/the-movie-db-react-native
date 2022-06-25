import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MovieDetailsScreen } from 'src/screens';
import { HomeNavigationStack } from 'src/types';
import Services from 'src/services/services';

export default function MovieDetailsScreenWrapper(props: NativeStackScreenProps<HomeNavigationStack, 'MovieDetailsScreen'>) {
	const { route } = props;
	const { movieId } = route.params;

	return <MovieDetailsScreen movieId={movieId} movieProvider={Services.getMovieWithDetails} />;
}