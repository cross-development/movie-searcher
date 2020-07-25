//Core
import React from 'react';
import PropTypes from 'prop-types';
//Additional components
import Rating from '@material-ui/lab/Rating';
//Utils
import getPosterUrl from '../../utils/getPosterUrl';
//Assets
import getDefaultPoster from '../../assets/default_poster.jpg';
//Styles
import styles from './MovieDetails.module.css';

const MovieDetails = ({ movieData }) => {
	const { poster_path, title, name, release_date, vote_average, overview, genres } = movieData;

	const moviePoster = poster_path ? `${getPosterUrl}${poster_path}` : getDefaultPoster;
	const movieGenres = genres.map(({ name }) => `${name}, `);

	return (
		<div className={styles.movieWrapper}>
			<div className={styles.posterWrapper}>
				<img src={moviePoster} alt={title || name} />
			</div>

			<div className={styles.detailsWrapper}>
				<h1>
					{title || name} ({release_date.substring(0, 4)})
				</h1>

				<Rating name="customized-10" defaultValue={vote_average} max={10} readOnly />

				<h2>Overview</h2>
				<p>{overview}</p>
				<h3>Genres</h3>
				<p>{movieGenres}</p>
				<button type="button" className={styles.addToFavorites}>
					Add to favorites
				</button>
			</div>
		</div>
	);
};

MovieDetails.propTypes = {
	movieData: PropTypes.object.isRequired,
};

export default MovieDetails;
