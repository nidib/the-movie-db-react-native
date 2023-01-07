import { isNil } from 'lodash';
import { Clock } from 'phosphor-react-native';
import React, { Fragment, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MovieTitleProps } from 'src/@types';
import { Colors } from 'src/constants/theme/colors';
import { Spacing } from 'src/constants/theme/spacing';
import { MovieInfoFormatting } from 'src/utils/helpers/movie_info_formatting';

const movieTitleStyles = StyleSheet.create({
	outerContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: -Spacing.SPACING_4,
	},
	scoreContainer: {
		marginRight: Spacing.SPACING_2,
	},
	scoreText: {
		fontSize: Spacing.SPACING_4,
	},
	titleContainer: {
		color: Colors.WHITE,
		fontSize: 22,
		fontWeight: 'bold',
		marginBottom: Spacing.SPACING_0,
		maxWidth: 300,
	},
	releaseDateContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	releaseDateText: {
		color: Colors.WHITE,
		fontSize: Spacing.SPACING_2,
	},
	durationIcon: {
		marginHorizontal: Spacing.SPACING_0,
	},
	durationText: {
		color: Colors.WHITE,
	},
});

export function MovieTitle(props: MovieTitleProps) {
	const {
		duration,
		releaseDate,
		score,
		title,
	} = props;
	const scoreTextStyles = useMemo(() => ({
		...movieTitleStyles.scoreText,
		color: MovieInfoFormatting.getMovieScoreColorFormatted(score),
	}), [score]);

	return (
		<View style={movieTitleStyles.outerContainer}>
			<View style={movieTitleStyles.scoreContainer}>
				<Text style={scoreTextStyles}>{ score.toFixed(1) }</Text>
			</View>
			<View>
				<Text style={movieTitleStyles.titleContainer}>{ title }</Text>
				<View style={movieTitleStyles.releaseDateContainer}>
					<Text style={movieTitleStyles.releaseDateText}>
						{ MovieInfoFormatting.getMovieReleaseDateFormatted(releaseDate) }
					</Text>
					{
						!isNil(duration) ? (
							<Fragment>
								<Clock color={Colors.WHITE} weight={'bold'} size={Spacing.SPACING_2} style={movieTitleStyles.durationIcon} />
								<Text style={movieTitleStyles.durationText}>{ MovieInfoFormatting.getMovieDurationFormatted(duration) }</Text>
							</Fragment>
						) : null
					}
				</View>
			</View>
		</View>
	);
}