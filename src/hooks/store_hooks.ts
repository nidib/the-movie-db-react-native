import { useCallback } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isMovieLikedSelector, likedMoviesAtom } from 'src/store/liked_movies';
import { toggleLikedMovie } from 'src/utils/helpers/liked_movies';

export function useLikedMovies() {
	return useRecoilValue(likedMoviesAtom);
}

export function useMovieLikeToggle() {
	const [likedMovies, setLikedMovies] = useRecoilState(likedMoviesAtom);

	return useCallback((movieId: number) => {
		setLikedMovies(toggleLikedMovie(movieId, likedMovies));
	}, [likedMovies, setLikedMovies]);
}

export function useIsMovieLiked(movieId: number) {
	return useRecoilValue(isMovieLikedSelector(movieId));
}