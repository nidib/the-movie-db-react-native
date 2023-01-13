import { atom, selectorFamily } from 'recoil';
import { StorageKeys } from 'src/constants/storage_keys';
import { isMovieLiked } from 'src/utils/helpers/liked_movies';
import { persistedEffect } from 'src/utils/helpers/persisted_storage_effect';

export const likedMoviesAtom = atom({
	key: 'LikedMovies',
	default: new Set<number>(),
	effects: [
		persistedEffect<Set<number>>({
			storageKey: StorageKeys.LIKED_MOVIES,
			storageValueFallback: '[]',
			deserializer: value => new Set(JSON.parse(value)),
			serializer: value => JSON.stringify(Array.from(value)),
		}),
	],
});

export const isMovieLikedSelector = selectorFamily({
	key: 'IsMovieLiked',
	get: (movieId: number) => ({ get }) => {
		const likedMovies = get(likedMoviesAtom);

		return isMovieLiked(movieId, likedMovies);
	},
});