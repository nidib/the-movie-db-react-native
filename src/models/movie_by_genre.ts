import { MovieByGenreDTO } from 'src/models/movie_dtos';

export class MovieByGenre {
	public readonly id: MovieByGenreDTO['id'];
	public readonly poster: MovieByGenreDTO['poster_path'];

	public constructor(movie: MovieByGenreDTO) {
		this.id = movie.id;
		this.poster = movie.poster_path;
	}
}