type BaseMovieProperties = {
	id: number
	backdrop_path: string | null
	poster_path: string | null
	title: string
	release_date: string
	vote_average: number
	runtime: number | null
	overview: string | null
}

export type MovieDetailsDTO = Pick<BaseMovieProperties, 'id'| 'backdrop_path' | 'title' | 'release_date' |'vote_average' | 'runtime' | 'overview' >;

export type MovieByGenreDTO = Pick<BaseMovieProperties, 'id' | 'poster_path'>

export type MoviesByGenreDTO = {
	page: number
	results: MovieByGenreDTO[]
	total_pages: number
	total_results: number
}