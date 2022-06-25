import { Colors } from 'src/constants/theme';

export default class MovieInfoFormatting {
	public static getMovieDurationFormatted(duration: number): string {
		const hours = Math.floor(duration / 60);
		const minutes = duration % 60;

		return `${hours}h ${minutes}min`;
	}

	public static getMovieReleaseDateFormatted(releaseDate: Date): string {
		return String(releaseDate.getFullYear());
	}

	public static getMovieScoreColorFormatted(score: number): string {
		if (score > 7) {
			return Colors.GREEN;
		}

		if (score > 5.5 && score <= 7) {
			return Colors.YELLOW;
		}

		return Colors.RED;
	}
}