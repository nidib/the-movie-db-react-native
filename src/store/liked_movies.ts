import { atom, selectorFamily } from 'recoil';
import { StorageKeys } from 'src/constants/storage_keys';
import { persistedEffect } from 'src/utils/helpers/persisted_storage_effect';

export const likedMoviesAtom = atom({
	key: 'LikedMovies',
	default: new Set<number>(),
	effects: [
		persistedEffect<Set<number>>({
			storageKey: StorageKeys.LIKED_MOVIES,
			customStorageValueFallback: '[]',
			customDeserializer: value => new Set(JSON.parse(value)),
			customSerializer: value => JSON.stringify(Array.from(value)),
		}),
	],
});

export const isMovieLikedSelector = selectorFamily({
	key: 'IsMovieLiked',
	get: (movieId: number) => ({ get }) => {
		const likedMovies = get(likedMoviesAtom);

		return likedMovies.has(movieId);
	},
});