import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKeys } from 'src/constants/storage_keys';

export class Storage {
	public static async getLikedMovies() {
		const items = await AsyncStorage.getItem(StorageKeys.LIKED_MOVIES) || '[]';
		const itemsSet = new Set<number>(JSON.parse(items));

		return itemsSet;
	}

	public static async updateLikedMovies(id: number, likedMovies: Set<number>) {
		const newLikedMovies = new Set(likedMovies);

		if (newLikedMovies.has(id)) {
			newLikedMovies.delete(id);
		} else {
			newLikedMovies.add(id);
		}

		await AsyncStorage.setItem(StorageKeys.LIKED_MOVIES, JSON.stringify(Array.from(newLikedMovies)));

		return newLikedMovies;
	}
}