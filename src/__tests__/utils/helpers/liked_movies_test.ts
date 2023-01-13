import { isMovieLiked, toggleLikedMovie } from 'src/utils/helpers/liked_movies';

describe('liked_movies helpers tests', () => {
	describe('toggleLikedMovie', () => {
		it('should add a movie if it is not on the list yet', () => {
			let likedMovies = new Set([1, 2]);

			likedMovies = toggleLikedMovie(3, likedMovies);

			expect(likedMovies).toEqual(new Set([1, 2, 3]));

			likedMovies = toggleLikedMovie(4, likedMovies);

			expect(likedMovies).toEqual(new Set([1, 2, 3, 4]));
		});

		it('should remove a movie if it is already on the list', () => {
			let likedMovies = new Set([1, 2, 3, 4]);

			likedMovies = toggleLikedMovie(4, likedMovies);

			expect(likedMovies).toEqual(new Set([1, 2, 3]));

			likedMovies = toggleLikedMovie(3, likedMovies);

			expect(likedMovies).toEqual(new Set([1, 2]));
		});

		it('should not change the reference', () => {
			const likedMovies = new Set([1, 2, 3, 4]);

			expect(toggleLikedMovie(4, likedMovies)).not.toStrictEqual(likedMovies);
		});
	});

	describe('isMovieLiked', () => {
		it('should return true if the movie is already liked', () => {
			const likedMovies = new Set([1, 2]);

			expect(isMovieLiked(1, likedMovies)).toBe(true);
			expect(isMovieLiked(2, likedMovies)).toBe(true);
		});

		it('should return false if the movie is not liked', () => {
			const likedMovies = new Set([1, 2]);

			expect(isMovieLiked(3, likedMovies)).toBe(false);
			expect(isMovieLiked(4, likedMovies)).toBe(false);
		});
	});
});