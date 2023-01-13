import { Colors } from 'src/constants/theme/colors';
import { MovieInfoFormatting } from 'src/utils/helpers/movie_info_formatting';

describe('MovieInfoFormatting tests', () => {
	describe('getMovieDurationFormatted', () => {
		it('should convert minutes to a formatted duration string', () => {
			expect(MovieInfoFormatting.getMovieDurationFormatted(0)).toBe('0h 0min');
			expect(MovieInfoFormatting.getMovieDurationFormatted(30)).toBe('0h 30min');
			expect(MovieInfoFormatting.getMovieDurationFormatted(45)).toBe('0h 45min');
			expect(MovieInfoFormatting.getMovieDurationFormatted(60)).toBe('1h 0min');
			expect(MovieInfoFormatting.getMovieDurationFormatted(90)).toBe('1h 30min');
			expect(MovieInfoFormatting.getMovieDurationFormatted(97)).toBe('1h 37min');
		});
	});

	describe('getMovieReleaseDateFormatted', () => {
		it('should convert a date to a formatted year string', () => {
			expect(MovieInfoFormatting.getMovieReleaseDateFormatted(new Date(2018, 11, 1))).toBe('2018');
			expect(MovieInfoFormatting.getMovieReleaseDateFormatted(new Date(2019, 11, 1))).toBe('2019');
			expect(MovieInfoFormatting.getMovieReleaseDateFormatted(new Date(2020, 11, 1))).toBe('2020');
			expect(MovieInfoFormatting.getMovieReleaseDateFormatted(new Date(2022, 11, 1))).toBe('2022');
		});
	});

	describe('getMovieScoreColorFormatted', () => {
		it('should return green if score is > than 7', () => {
			expect(MovieInfoFormatting.getMovieScoreColorFormatted(7.1)).toBe(Colors.GREEN);
			expect(MovieInfoFormatting.getMovieScoreColorFormatted(9)).toBe(Colors.GREEN);
			expect(MovieInfoFormatting.getMovieScoreColorFormatted(10)).toBe(Colors.GREEN);
		});
		it('should return yellow if score is > than 5.5 and <= than 7', () => {
			expect(MovieInfoFormatting.getMovieScoreColorFormatted(5.6)).toBe(Colors.YELLOW);
			expect(MovieInfoFormatting.getMovieScoreColorFormatted(6)).toBe(Colors.YELLOW);
			expect(MovieInfoFormatting.getMovieScoreColorFormatted(6.9)).toBe(Colors.YELLOW);
			expect(MovieInfoFormatting.getMovieScoreColorFormatted(7)).toBe(Colors.YELLOW);
		});
		it('should return yellow if score is <= than 5.5', () => {
			expect(MovieInfoFormatting.getMovieScoreColorFormatted(5.5)).toBe(Colors.RED);
			expect(MovieInfoFormatting.getMovieScoreColorFormatted(5)).toBe(Colors.RED);
			expect(MovieInfoFormatting.getMovieScoreColorFormatted(3)).toBe(Colors.RED);
			expect(MovieInfoFormatting.getMovieScoreColorFormatted(0)).toBe(Colors.RED);
		});
	});
});