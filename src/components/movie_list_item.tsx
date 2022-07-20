import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useMemo } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { HomePropsStack } from 'src/@types';
import { ApiUrls } from 'src/constants/api_urls';
import { Spacing } from 'src/constants/theme/spacing';
import { movieDetailsModalScreenID } from 'src/navigations/root_navigation';

type MovieCardProps = {
	poster: string | null
	id: number
}

const movieStyles = StyleSheet.create({
	image: {
		width: 140,
		height: 200,
		marginRight: Spacing.SPACING_2,
	},
});

export function MovieListItem(props: MovieCardProps) {
	const { poster, id } = props;
	const navigation = useNavigation<HomePropsStack>();
	const posterSource = useMemo(() => ({
		uri: poster ? ApiUrls.getImageUrl(poster) : undefined,
	}), [poster]);
	const handleMovieItemClick = useCallback(() => navigation.navigate(movieDetailsModalScreenID, { movieId: id }), [id]);

	return (
		<TouchableOpacity onPress={handleMovieItemClick}>
			<FastImage source={posterSource} style={movieStyles.image} />
		</TouchableOpacity>
	);
}