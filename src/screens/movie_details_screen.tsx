import React, { useCallback, useEffect, useState } from 'react';
import {
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Colors, Spacing } from '../constants/theme';
import { Movie } from '../models';
import { Divider, MovieCoverHeader, MovieTitle } from '../components';
import { HomeNavigationStack } from '../types/types';
import { Logger } from '../utils/helpers';

const movieDetailsScreenStyles = StyleSheet.create({
	safeAreaView: {
		flex: 1,
		backgroundColor: Colors.BLACK,
	},
	movieTitleWithDescriptionContainer: {
		display: 'flex',
		alignItems: 'center',
	},
	dividerContainer: {
		marginTop: Spacing.SPACING_4,
		marginBottom: Spacing.SPACING_4,
	},
	description: {
		color: Colors.WHITE,
		fontSize: 18,
		lineHeight: 28,
		paddingHorizontal: Spacing.SPACING_2,
	},
});

export default function MovieDetailsScreen(props: NativeStackScreenProps<HomeNavigationStack, 'MovieDetailsScreen'>) {
	const { route } = props;
	const { movieProvider, movieId } = route.params;
	const [isLiked, setIsLiked] = useState(false);
	const [movie, setMovie] = useState<Movie | null>(null);
	const handleFavoriteIconClick = useCallback(() => setIsLiked(prevState => !prevState), []);
	const getMovie = useCallback(async () => {
		try {
			setMovie(await movieProvider(movieId));
		} catch (e) {
			Logger.error(e);
		}
	}, []);

	useEffect(() => {
		getMovie();
	}, []);

	if (!movie) {
		return <Text>{ 'Loading...' }</Text>;
	}

	const {
		title,
		releaseDate,
		cover,
		score,
		duration,
		description,
	} = movie;

	return (
		<SafeAreaView style={movieDetailsScreenStyles.safeAreaView}>
			<ScrollView>
				<MovieCoverHeader cover={cover} onFavoriteIconClick={handleFavoriteIconClick} isLiked={isLiked} />
				<View style={movieDetailsScreenStyles.movieTitleWithDescriptionContainer}>
					<MovieTitle duration={duration} releaseDate={releaseDate} score={score} title={title} />
					<View style={movieDetailsScreenStyles.dividerContainer}>
						<Divider />
					</View>
					<Text style={movieDetailsScreenStyles.description}>{ description }</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}