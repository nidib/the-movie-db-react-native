import { MovieByGenre } from 'src/models/movie_by_genre';
import { MovieDetails } from 'src/models/movie_details';
import { MovieByGenreDTO, MovieDetailsDTO } from 'src/models/movie_dtos';

export class MovieFactory {
	public static fromMovieDetailsDTO(movieDetails: MovieDetailsDTO): MovieDetails {
		return new MovieDetails(movieDetails);
	}

	public static fromMovieByGenreDTO(movieByGenre: MovieByGenreDTO): MovieByGenre {
		return new MovieByGenre(movieByGenre);
	}
}