//Utils
import getPosterUrl from 'utils/getPosterUrl';
//Assets
import getDefaultPoster from 'assets/default_poster.jpg';

export function getPrettierMovieDetails(movie) {
	const { poster_path, title, name, release_date, vote_average, overview, genres } = movie;

	const poster = poster_path ? `${getPosterUrl}${poster_path}` : getDefaultPoster;
	const movieGenres = genres.map(({ name }) => `${name}, `);
	const release = release_date.substring(0, 4);
	const movieTitle = title || name;
	const vote = vote_average;

	return {
		vote,
		poster,
		release,
		overview,
		movieTitle,
		movieGenres,
	};
}
