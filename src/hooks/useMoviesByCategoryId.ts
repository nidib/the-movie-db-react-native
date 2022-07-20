import { useEffect, useState } from 'react';
import { Optional } from 'src/@types';
import { MovieByGenre } from 'src/models/movie_by_genre';
import { Services } from 'src/services/services';
import { Logger } from 'src/utils/helpers/logger';

export function useMoviesByCategoryId(categoryId: number) {
	const [movies, setMovies] = useState<Optional<MovieByGenre[]>>([]);

	useEffect(() => {
		Services.getMoviesByGenre(categoryId)
			.then(setMovies)
			.catch(Logger.error);
	}, []);

	return {
		movies,
	};
}