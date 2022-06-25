import { MovieDetailsDTO } from 'src/models/dtos/movie_details_dto';

export default class Movie {
	public id: number;
	public cover: string | null;
	public title: string;
	public releaseDate: Date;
	public score: number;
	public duration: number | null;
	public description: string | null;

	public constructor(movie: MovieDetailsDTO) {
		this.id = movie.id;
		this.cover = movie.backdrop_path ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` : null;
		this.title = movie.title;
		this.releaseDate = new Date(movie.release_date);
		this.score = movie.vote_average;
		this.duration = movie.runtime;
		this.description = movie.overview;
	}
}