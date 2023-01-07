import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import {
	FlatList,
	ListRenderItem,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
} from 'react-native';
import { HomePropsStack } from 'src/@types';
import { Colors } from 'src/constants/theme/colors';
import { movieDetailsModalScreenID } from 'src/navigations/root_navigation';
import { Storage } from 'src/utils/helpers/storage';

const styles = StyleSheet.create({
	screen: {
		backgroundColor: Colors.BLACK,
		flex: 1,
	},
	favoriteItem: {
		borderBottomWidth: 0.5,
		borderTopWidth: 0.5,
		borderColor: 'white',
		backgroundColor: Colors.BLACK,
		paddingVertical: 32,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
	favoriteItemText: {
		color: Colors.WHITE,
	},
});

export function FavoritesScreen() {
	const navigation = useNavigation<HomePropsStack>();
	const [likedMovies, setLikedMovies] = useState<Set<number>>(new Set());

	const getInitialLikedMovies = useCallback(async () => {
		setLikedMovies(await Storage.getLikedMovies());
	}, []);

	const handleMovieItemClick = useCallback((movieId: number) => {
		navigation.navigate(movieDetailsModalScreenID, { movieId });
	}, [navigation]);

	const renderItem: ListRenderItem<number> = useCallback(({ item }) => {
		return (
			<TouchableOpacity onPress={() => handleMovieItemClick(item)} style={styles.favoriteItem}>
				<Text style={styles.favoriteItemText}>{ item }</Text>
			</TouchableOpacity>
		);
	}, [handleMovieItemClick]);

	useEffect(() => { getInitialLikedMovies(); }, [getInitialLikedMovies]);
	useFocusEffect(useCallback(() => { getInitialLikedMovies(); }, [getInitialLikedMovies]));

	return (
		<SafeAreaView style={styles.screen}>
			<FlatList
				data={Array.from(likedMovies)}
				renderItem={renderItem}
				keyExtractor={String}
			/>
		</SafeAreaView>
	);
}