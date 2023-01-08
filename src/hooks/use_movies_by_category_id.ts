import { useQuery } from '@tanstack/react-query';
import { Optional } from 'src/@types';
import { MovieByGenre } from 'src/models/movie_by_genre';
import { Services } from 'src/services/services';
import { Logger } from 'src/utils/helpers/logger';

export function useMoviesByCategoryId(categoryId: number) {
	const { data } = useQuery({
		queryKey: ['categoryId', categoryId],
		queryFn: () => Services.getMoviesByGenre(categoryId),
		onError: Logger.error,
	});

	return data as Optional<MovieByGenre[]>;
}