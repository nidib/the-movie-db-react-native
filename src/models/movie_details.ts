import { MovieDetailsDTO } from 'src/models/movie_dtos';

export class MovieDetails {
	public readonly id: MovieDetailsDTO['id'];
	public readonly title: MovieDetailsDTO['title'];
	public readonly cover: MovieDetailsDTO['backdrop_path'];
	public readonly score: MovieDetailsDTO['vote_average'];
	public readonly duration: MovieDetailsDTO['runtime'];
	public readonly description: MovieDetailsDTO['overview'];
	public readonly releaseDate: Date;

	public constructor(movie: MovieDetailsDTO) {
		this.id = movie.id;
		this.cover = movie.backdrop_path;
		this.title = movie.title;
		this.releaseDate = new Date(movie.release_date);
		this.score = movie.vote_average;
		this.duration = movie.runtime;
		this.description = movie.overview;
	}
}