import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MovieDetails } from 'src/models/movie_details';
import { favoritesTabID, homeTabID } from 'src/navigations/bottom_tab_navigation';
import { mainScreenID, movieDetailsModalScreenID } from 'src/navigations/root_navigation';

export type Map<Z> = { [key: string]: Z; };

export type Optional<T> = T | null;

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
	movieId: MovieDetails['id']
	movieProvider: (movieId: MovieDetails['id']) => Promise<Optional<MovieDetails>>;
}

export type BottomNavigationStack = {
	[homeTabID]: undefined
	[favoritesTabID]: undefined
}
export type BottomPropsStack = BottomTabNavigationProp<BottomNavigationStack>;

export type RootNavigationStack = {
	[mainScreenID]: undefined,
	[movieDetailsModalScreenID]: Pick<MovieDetailsScreenProps, 'movieId'>,
}
export type HomePropsStack = NativeStackNavigationProp<RootNavigationStack>;