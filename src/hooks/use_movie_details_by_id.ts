import { useQuery } from '@tanstack/react-query';
import { Optional } from 'src/@types';
import { MovieDetails } from 'src/models/movie_details';
import { Services } from 'src/services/services';
import { Logger } from 'src/utils/helpers/logger';

export function useMovieDetailsById(id: number) {
	const { data } = useQuery({
		queryKey: ['movieId', id],
		queryFn: () => Services.getMovieWithDetails(id),
		onError: Logger.error,
	});

	return data as Optional<MovieDetails>;
}