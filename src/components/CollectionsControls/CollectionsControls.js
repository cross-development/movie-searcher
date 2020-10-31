//Core
import React from 'react';
import PropTypes from 'prop-types';
//Redux
import { connect } from 'react-redux';
import { collectionOperations } from 'redux/collection';
import { moviesSelectors } from 'redux/movies';
//Styles
import styles from './CollectionsControls.module.css';

//TODO: fiiiiiix it
const CollectionsControls = ({
	isFavorite,
	isQueue,
	addFavMovie,
	removeFavMovie,
	addQueMovie,
	removeQueMovie,
}) => {
	return (
		<div>
			{!isFavorite ? (
				<button type="button" className={styles.favoriteButton} onClick={addFavMovie}>
					Add to favorites
				</button>
			) : (
				<button type="button" className={styles.favoriteButton} onClick={removeFavMovie}>
					Remove from favorites
				</button>
			)}

			{!isQueue ? (
				<button type="button" className={styles.favoriteButton} onClick={addQueMovie}>
					Add to queue
				</button>
			) : (
				<button type="button" className={styles.favoriteButton} onClick={removeQueMovie}>
					Remove from queue
				</button>
			)}
		</div>
	);
};

CollectionsControls.propTypes = {
	isQueue: PropTypes.bool.isRequired,
	isFavorite: PropTypes.bool.isRequired,
	addFavMovie: PropTypes.func.isRequired,
	removeFavMovie: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	isFavorite: moviesSelectors.isFavorite(state),
	isQueue: moviesSelectors.isQueue(state),
});

const mapDispatchToProps = (dispatch, { movie, user: { uid } }) => ({
	addFavMovie: () =>
		dispatch(collectionOperations.addFavoriteMovie(uid, { ...movie, isFavorite: true })),
	removeFavMovie: () => dispatch(collectionOperations.removeFavoriteMovie(uid, movie.id)),

	addQueMovie: () => dispatch(collectionOperations.addQueueMovie(uid, { ...movie, isQueue: true })),
	removeQueMovie: () => dispatch(collectionOperations.removeQueueMovie(uid, movie.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionsControls);
