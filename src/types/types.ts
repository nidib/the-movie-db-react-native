import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Movie } from 'src/models';

/* Components props */
export type DividerProps = {
	color?: string;
	width?: number;
}

export type MovieCoverHeaderProps = {
	isLiked?: boolean;
	showFavoriteIcon?: boolean;
	onFavoriteIconClick?: () => void;
} & Pick<Movie, 'cover'>;

export type MovieTitleProps = Pick<Movie, 'duration' | 'releaseDate' | 'score' | 'title'>;

export type MovieDetailsScreenProps = {
	movieId: string | number;
	movieProvider: (movieId: string | number) => Promise<Movie>;
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