import { useCallback } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isMovieLikedSelector, likedMoviesAtom } from 'src/store/liked_movies';

export function useLikedMovies() {
	return useRecoilValue(likedMoviesAtom);
}

export function useMovieLikeToggle() {
	const [likedMovies, setLikedMovies] = useRecoilState(likedMoviesAtom);

	return useCallback((movieId: number) => {
		const newLikedMovies = new Set(likedMovies);

		if (newLikedMovies.has(movieId)) {
			newLikedMovies.delete(movieId);
		} else {
			newLikedMovies.add(movieId);
		}

		setLikedMovies(newLikedMovies);
	}, [likedMovies, setLikedMovies]);
}

export function useIsMovieLiked(movieId: number) {
	return useRecoilValue(isMovieLikedSelector(movieId));
}