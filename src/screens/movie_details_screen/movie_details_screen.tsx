import React, { useCallback, useEffect, useState } from 'react';
import {
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { Colors, Spacing } from 'src/constants/theme';
import { Divider, MovieCoverHeader, MovieTitle } from 'src/components';
import { Logger } from 'src/utils/helpers';
import { MovieDetailsScreenProps, Optional } from 'src/types';
import { MovieDetails } from 'src/models/movie_details';
import ApiUrls from 'src/constants/api_urls';

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

export default function MovieDetailsScreen(props: MovieDetailsScreenProps) {
	const { movieId, movieProvider } = props;
	const [isLiked, setIsLiked] = useState(false);
	const [movie, setMovie] = useState<Optional<MovieDetails>>(null);
	const handleFavoriteIconClick = useCallback(() => {
		setIsLiked(prevState => !prevState);
	}, []);
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
				<MovieCoverHeader cover={ApiUrls.getImageUrl(cover)} onFavoriteIconClick={handleFavoriteIconClick} isLiked={isLiked} />
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