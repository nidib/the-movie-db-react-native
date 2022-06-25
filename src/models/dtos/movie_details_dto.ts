export type MovieDetailsDTO = {
	id: number
	backdrop_path: string | null
	title: string
	release_date: string
	vote_average: number
	runtime: number | null
	overview: string | null
}