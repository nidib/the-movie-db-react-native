import { Map, Optional } from 'src/@types';
import { MovieFactory } from 'src/models/factories/movie_factory';
import { MovieByGenre } from 'src/models/movie_by_genre';
import { MovieDetails } from 'src/models/movie_details';
import { MovieDetailsDTO, MoviesByGenreDTO } from 'src/models/movie_dtos';
import { api } from 'src/services/api';
import { Logger } from 'src/utils/helpers/logger';

const cache: Map<any> = {};

export class Services {
	private static async apiFetch<T>(endpoint: string, params: any): Promise<Optional<T>> {
		let data: T | null = null;
		let cacheKey: string;
		let cachedData: | undefined;

		try {
			cacheKey = `${endpoint}/${Object.entries(params).map(param => `${param[0]}=${param[1]}`).sort()}`;
			cachedData = cache[cacheKey];

			if (cachedData) {
				return cachedData;
			}

			data = (await api.get(endpoint, { params })).data;
			cache[cacheKey] = data;

			Logger.info('fetched', cacheKey, 'at', new Date().toUTCString());
		} catch (e) {
			Logger.error(e);
		}

		return data;
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