import { Movie } from 'src/models';
import { MovieDetailsDTO } from 'src/models/dtos/movie_details_dto';

export default class Services {
	private static async apiFetch<T>(endpoint: string): Promise<T> {
		const response = await fetch(`https://api.themoviedb.org/3/${endpoint}?api_key=`);

		return response.json();
	}

	public static async getMovieWithDetails(movieId: number | string): Promise<Movie> {
		const json = await Services.apiFetch<MovieDetailsDTO>(`movie/${movieId}`);

		return new Movie(json);
	}
}