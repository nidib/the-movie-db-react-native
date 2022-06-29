import React, { useCallback, useEffect, useState } from 'react';
import {
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import { MovieDetailsScreenProps, Optional } from 'src/@types';
import { Divider } from 'src/components/divider';
import { MovieCoverHeader } from 'src/components/movie_cover_header';
import { MovieTitle } from 'src/components/movie_title';
import { Colors } from 'src/constants/theme/colors';
import { Spacing } from 'src/constants/theme/spacing';
import { MovieDetails } from 'src/models/movie_details';
import { Logger } from 'src/utils/helpers/logger';
import { Storage } from 'src/utils/helpers/storage';

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

const hapticFeedbackOptions = {
	enableVibrateFallback: true,
	ignoreAndroidSystemSettings: false,
};

export function MovieDetailsScreen(props: MovieDetailsScreenProps) {
	const { movieId, movieProvider } = props;
	const [isLiked, setIsLiked] = useState(false);
	const [movie, setMovie] = useState<Optional<MovieDetails>>(null);

	const handleFavoriteIconClick = useCallback(async () => {
		const likedMovies = await Storage.getLikedMovies();
		const newLikedMovies = await Storage.updateLikedMovies(movieId, likedMovies);
		const isMovieLiked = newLikedMovies.has(movieId);

		ReactNativeHapticFeedback.trigger('impactLight', hapticFeedbackOptions);
		setIsLiked(isMovieLiked);
	}, []);

	const getMovie = useCallback(async () => {
		try {
			setMovie(await movieProvider(movieId));
		} catch (e) {
			Logger.error(e);
		}
	}, []);

	const getInitialLike = useCallback(async () => {
		const itemsSet = await Storage.getLikedMovies();

		setIsLiked(itemsSet.has(movieId));
	}, []);

	useEffect(() => {
		getInitialLike();
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