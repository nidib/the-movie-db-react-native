import { useScrollToTop } from '@react-navigation/native';
import React, { useCallback, useMemo, useRef } from 'react';
import {
	FlatList,
	ListRenderItemInfo,
	SafeAreaView,
	StyleSheet,
} from 'react-native';
import { CategoryTitle } from 'src/components/category_title';
import { MovieList } from 'src/components/movie_list';
import { Colors } from 'src/constants/theme/colors';

type CategoryListItem = {
	id: string
	isTitle?: boolean
	render: () => JSX.Element
}

const categoriesList: CategoryListItem[] = [{
	id: 'ANIMATION',
	isTitle: true,
	render: () => <CategoryTitle title={'Animation'} />,
}, {
	id: 'ANIMATION_CONTENT',
	render: () => <MovieList categoryId={16} />,
}, {
	id: 'ACTION',
	isTitle: true,
	render: () => <CategoryTitle title={'Action'} />,
}, {
	id: 'ACTION_CONTENT',
	render: () => <MovieList categoryId={28} />,
}, {
	id: 'COMEDY',
	isTitle: true,
	render: () => <CategoryTitle title={'Comedy'} />,
}, {
	id: 'COMEDY_CONTENT',
	render: () => <MovieList categoryId={35} />,
}, {
	id: 'DRAMA',
	isTitle: true,
	render: () => <CategoryTitle title={'Drama'} />,
}, {
	id: 'DRAMA_CONTENT',
	render: () => <MovieList categoryId={18} />,
}, {
	id: 'DOCUMENTARY',
	isTitle: true,
	render: () => <CategoryTitle title={'Documentary'} />,
}, {
	id: 'DOCUMENTARY_CONTENT',
	render: () => <MovieList categoryId={99} />,
}];

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.BLACK,
	},
});

export function AllMoviesScreen() {
	const ref = useRef(null);
	const stickyHeaderIndices: number[] = useMemo(() => {
		let list: number[] = [];
		categoriesList.forEach((item, i) => item.isTitle && list.push(i));
		return list;
	}, [categoriesList]);
	const renderItem = useCallback((current: ListRenderItemInfo<CategoryListItem>) => current.item.render(), []);
	const keyExtractor = useCallback((item: CategoryListItem) => item.id, []);

	useScrollToTop(ref);

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={categoriesList}
				renderItem={renderItem}
				stickyHeaderIndices={stickyHeaderIndices}
				keyExtractor={keyExtractor}
				ref={ref}
			/>
		</SafeAreaView>
	);
}