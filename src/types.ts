import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MovieDetails } from 'src/models/movie_details';

export type Map<Z> = { [key: string]: Z; };

export type Optional<T> = T | null;

/* Components props */
export type DividerProps = {
	color?: string;
	width?: number;
}

export type MovieCoverHeaderProps = {
	isLiked?: boolean;
	showFavoriteIcon?: boolean;
	onFavoriteIconClick?: () => void;
} & Pick<MovieDetails, 'cover'>;

export type MovieTitleProps = Pick<MovieDetails, 'duration' | 'releaseDate' | 'score' | 'title'>;

export type MovieDetailsScreenProps = {
	movieId: string | number;
	movieProvider: (movieId: string | number) => Promise<Optional<MovieDetails>>;
}

/* BottomTabNavigation */
export type BottomNavigationStack = {
	Home: undefined
	Favorites: undefined
}
export type BottomPropsStack = BottomTabNavigationProp<BottomNavigationStack>;

export type HomeNavigationStack = {
	AllMoviesScreen: undefined,
	MovieDetailsScreen: Pick<MovieDetailsScreenProps, 'movieId'>,
}
export type HomePropsStack = NativeStackNavigationProp<HomeNavigationStack>;