export function toggleLikedMovie(movieId: number, movies: Set<number>): Set<number> {
	const newLikedMovies = new Set(movies);

	if (newLikedMovies.has(movieId)) {
		newLikedMovies.delete(movieId);
	} else {
		newLikedMovies.add(movieId);
	}

	return newLikedMovies;
}

export function isMovieLiked(movieId: number, movies: Set<number>) {
	return movies.has(movieId);
}