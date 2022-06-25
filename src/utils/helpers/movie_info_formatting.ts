import { Colors } from '../../constants/theme';

export default class MovieInfoFormatting {
	static getMovieDurationFormatted(duration: number): string {
		const hours = Math.floor(duration / 60);
		const minutes = duration % 60;

		return `${hours}h ${minutes}min`;
	}

	static getMovieReleaseDateFormatted(releaseDate: Date): string {
		return String(releaseDate.getFullYear());
	}

	static getMovieScoreColorFormatted(score: number): string {
		if (score > 7) {
			return Colors.GREEN;
		}

		if (score > 5.5 && score <= 7) {
			return Colors.YELLOW;
		}

		return Colors.RED;
	}
}