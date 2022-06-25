import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Movie } from 'src/models';
import { MOVIE_MOCK } from 'src/_temp/mocks';
import { MovieDetailsScreen } from 'src/screens';
import { HomeNavigationStack } from 'src/types/types';

export default function MovieDetailsScreenWrapper(props: NativeStackScreenProps<HomeNavigationStack, 'MovieDetailsScreen'>) {
	const { route } = props;
	const { movieId } = route.params;

	return <MovieDetailsScreen movieId={movieId} movieProvider={_movieId => Promise.resolve(new Movie(MOVIE_MOCK))} />;
}