import React, { useCallback } from 'react';
import {
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import { MovieDetailsScreenProps } from 'src/@types';
import { Divider } from 'src/components/divider';
import { MovieCoverHeader } from 'src/components/movie_cover_header';
import { MovieTitle } from 'src/components/movie_title';
import { Colors } from 'src/constants/theme/colors';
import { Spacing } from 'src/constants/theme/spacing';
import { useMovieDetailsById } from 'src/hooks/service_hooks';
import { useIsMovieLiked, useMovieLikeToggle } from 'src/hooks/store_hooks';

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
	const { movieId } = props;
	const movie = useMovieDetailsById(movieId);
	const isMovieLiked = useIsMovieLiked(movieId);
	const toggleMovieLike = useMovieLikeToggle();

	const handleFavoriteIconClick = useCallback(async () => {
		toggleMovieLike(movieId);
		ReactNativeHapticFeedback.trigger('impactLight', hapticFeedbackOptions);
	}, [movieId, toggleMovieLike]);

	if (!movie) {
		return <SafeAreaView style={movieDetailsScreenStyles.safeAreaView} />;
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
				<MovieCoverHeader cover={cover} onFavoriteIconClick={handleFavoriteIconClick} isLiked={isMovieLiked} />
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