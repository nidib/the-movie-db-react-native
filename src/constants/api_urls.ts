export default class ApiUrls {
	public static readonly API_BASE_URL = 'https://api.themoviedb.org/3';
	private static readonly IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

	public static getImageUrl(imagePath: string) {
		return `${ApiUrls.IMAGE_BASE_URL}${imagePath}`;
	}
}