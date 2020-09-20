//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import Rating from '@material-ui/lab/Rating';
import CollectionsControls from '../CollectionsControls';
//Utils
import getPosterUrl from 'utils/getPosterUrl';
//Assets
import getDefaultPoster from 'assets/default_poster.jpg';
//Styles
import styles from './MovieDetails.module.css';

const MovieDetails = ({ movieData, isFavorite, isQueue, existUser }) => {
	const { poster_path, title, name, release_date, vote_average, overview, genres } = movieData;

	const moviePoster = poster_path ? `${getPosterUrl}${poster_path}` : getDefaultPoster;
	const movieGenres = genres.map(({ name }) => `${name}, `);
	const releaseDate = release_date.substring(0, 4);

	return (
		<div className={styles.movieWrapper}>
			<div className={styles.posterWrapper}>
				<img src={moviePoster} alt={title || name} />
			</div>

			<div className={styles.detailsWrapper}>
				<h1>
					{title || name} ({releaseDate})
				</h1>

				<Rating name="customized-10" defaultValue={vote_average} max={10} readOnly />

				<div className={styles.overview}>
					<h2>Overview</h2>
					<p>{overview}</p>
					<h3>Genres</h3>
					<p>{movieGenres}</p>
				</div>

				{existUser && (
					<CollectionsControls
						movie={movieData}
						user={existUser}
						isFavorite={isFavorite}
						isQueue={isQueue}
					/>
				)}
			</div>
		</div>
	);
};

MovieDetails.propTypes = {
	isQueue: PropTypes.bool,
	isFavorite: PropTypes.bool,
	existUser: PropTypes.objectOf(PropTypes.any),
	movieData: PropTypes.objectOf(PropTypes.any).isRequired,
};

MovieDetails.defaultProps = {
	isQueue: false,
	existUser: null,
	isFavorite: false,
};

export default MovieDetails;
