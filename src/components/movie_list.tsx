import React, { useCallback } from 'react';
import {
	FlatList,
	ListRenderItemInfo,
	ScrollView,
	StyleSheet,
	View,
} from 'react-native';
import { MovieListItem } from 'src/components/movie_list_item';
import { ViewMore } from 'src/components/view_more';
import { Spacing } from 'src/constants/theme/spacing';
import { useMoviesByCategoryId } from 'src/hooks/use_movies_by_category_id';
import { MovieByGenre } from 'src/models/movie_by_genre';

type MovieListProps = {
	categoryId: number
}

const movieListStyles = StyleSheet.create({
	viewMoreContainer: {
		padding: Spacing.SPACING_4,
		marginRight: Spacing.SPACING_2,
		alignSelf: 'center',
	},
});

export function MovieList(props: MovieListProps) {
	const { categoryId } = props;
	const movies = useMoviesByCategoryId(categoryId);

	const renderItem = useCallback((current: ListRenderItemInfo<MovieByGenre>) => {
		const { id, poster } = current.item;

		return <MovieListItem id={id} poster={poster} />;
	}, []);

	return (
		<ScrollView horizontal>
			<FlatList
				data={movies}
				renderItem={renderItem}
				horizontal
			/>
			<View style={movieListStyles.viewMoreContainer}>
				<ViewMore />
			</View>
		</ScrollView>
	);
}