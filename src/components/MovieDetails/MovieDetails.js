//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import Rating from '@material-ui/lab/Rating';
//Utils
import { getPrettierMovieDetails } from 'utils/getPrettierMovie';
//Styles
import styles from './MovieDetails.module.css';

//Fixed
const MovieDetails = ({ movieData, isFavorite, existUser, onChangeCollection }) => {
	const prettierMovieDetails = getPrettierMovieDetails(movieData);
	const { vote, poster, release, overview, movieTitle, movieGenres } = prettierMovieDetails;

	return (
		<div className={styles.movieWrapper}>
			<div className={styles.posterWrapper}>
				<img src={poster} alt={movieTitle} />
			</div>

			<div className={styles.detailsWrapper}>
				<h1>
					{movieTitle} ({release})
				</h1>

				<Rating name="customized-10" defaultValue={vote} max={10} readOnly />

				<div className={styles.overview}>
					<h2>Overview</h2>
					<p>{overview}</p>
					<h3>Genres</h3>
					<p>{movieGenres}</p>
				</div>

				{existUser && (
					<div>
						<button type="button" className={styles.favoriteButton} onClick={onChangeCollection}>
							{isFavorite ? 'Remove from favorites' : 'Add to favorites'}
						</button>

						<button type="button" className={styles.favoriteButton}>
							{false ? 'Remove from queue' : 'Add to queue'}
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

MovieDetails.propTypes = {
	existUser: PropTypes.objectOf(PropTypes.any),
	movieData: PropTypes.objectOf(PropTypes.any).isRequired,
};

MovieDetails.defaultProps = {
	existUser: null,
};

export default MovieDetails;

// {!isFavorite ? (
// 	<button type="button" className={styles.addToFavorites} onClick={onAddMovie}>
// 		Add to favorites
// 	</button>
// ) : (
// 	<button type="button" className={styles.addToFavorites} onClick={() => onRemoveMovie(id)}>
// 		Remove at favorites
// 	</button>
// )}
