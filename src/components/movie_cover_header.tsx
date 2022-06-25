import React, { useMemo } from 'react';
import {
	ImageBackground,
	ImageSourcePropType,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import { HeartStraight } from 'phosphor-react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors, Spacing } from '../constants/theme';
import { MovieCoverHeaderProps } from '../types/types';

const linearGradientColors = ['transparent', Colors.BLACK];

const movieCoverHeaderStyles = StyleSheet.create({
	coverBackground: {
		width: '100%',
		height: Spacing.SPACING_4 * 10,
	},
	linearGradient: {
		height: '100%',
		width: '100%',
	},
	favoriteIcon: {
		position: 'absolute',
		top: Spacing.SPACING_2,
		right: Spacing.SPACING_2,
		padding: Spacing.SPACING_1,
	},
});

function MovieCoverHeader(props: MovieCoverHeaderProps) {
	const {
		cover,
		isLiked,
		showFavoriteIcon,
		onFavoriteIconClick,
	} = props;
	const backgroundSource: ImageSourcePropType = useMemo(() => ({ uri: cover ?? undefined }), [cover]);
	const heartWeight = isLiked ? 'fill' : 'bold';

	return (
		<ImageBackground source={backgroundSource} style={movieCoverHeaderStyles.coverBackground}>
			<LinearGradient colors={linearGradientColors} style={movieCoverHeaderStyles.linearGradient} />
			{
				showFavoriteIcon && (
					<TouchableOpacity onPress={onFavoriteIconClick} style={movieCoverHeaderStyles.favoriteIcon}>
						<HeartStraight color={Colors.WHITE} weight={heartWeight} />
					</TouchableOpacity>
				)
			}
		</ImageBackground>
	);
}

MovieCoverHeader.defaultProps = {
	isLiked: false,
	showFavoriteIcon: true,
	onFavoriteIconClick: undefined,
};

export default MovieCoverHeader;