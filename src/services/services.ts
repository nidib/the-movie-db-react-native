import { Optional } from 'src/@types';
import { MovieFactory } from 'src/models/factories/movie_factory';
import { MovieByGenre } from 'src/models/movie_by_genre';
import { MovieDetails } from 'src/models/movie_details';
import { MovieDetailsDTO, MoviesByGenreDTO } from 'src/models/movie_dtos';
import { api } from 'src/services/api';
import { Logger } from 'src/utils/helpers/logger';

export class Services {
	private static async apiFetch<T>(endpoint: string, params: any): Promise<Optional<T>> {
		try {
			const { data } = await api.get(endpoint, { params });
			return data;
		} catch (e) {
			Logger.error(e);
		}

		return null;
	}

	public static async getMovieWithDetails(movieId: number | string): Promise<Optional<MovieDetails>> {
		const data = await Services.apiFetch<MovieDetailsDTO>(`movie/${movieId}`, {});

		if (!data) {
			return null;
		}

		return MovieFactory.fromMovieDetailsDTO(data);
	}

	public static async getMoviesByGenre(genre: number): Promise<Optional<MovieByGenre[]>> {
		const data = await Services.apiFetch<MoviesByGenreDTO>('discover/movie', { with_genres: genre });

		if (!data) {
			return null;
		}

		return data.results.map(movie => MovieFactory.fromMovieByGenreDTO(movie));
	}
}