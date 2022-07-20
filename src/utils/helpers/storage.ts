import AsyncStorage from '@react-native-async-storage/async-storage';

export class Storage {
	public static async getLikedMovies() {
		const items = await AsyncStorage.getItem('LikedMovies') || '[]';
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

		await AsyncStorage.setItem('LikedMovies', JSON.stringify(Array.from(newLikedMovies)));

		return newLikedMovies;
	}
}