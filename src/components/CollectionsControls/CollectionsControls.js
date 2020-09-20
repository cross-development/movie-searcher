//Core
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//Redux
import { collectionOperations } from 'redux/collection';
//Styles
import styles from './CollectionsControls.module.css';

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

const mapDispatchToProps = (dispatch, { movie, user: { uid } }) => ({
	addFavMovie: () =>
		dispatch(collectionOperations.addFavoriteMovie(uid, { ...movie, isFavorite: true })),
	removeFavMovie: () => dispatch(collectionOperations.removeFavoriteMovie(uid, movie.id)),

	addQueMovie: () => dispatch(collectionOperations.addQueueMovie(uid, { ...movie, isQueue: true })),
	removeQueMovie: () => dispatch(collectionOperations.removeQueueMovie(uid, movie.id)),
});

export default connect(null, mapDispatchToProps)(CollectionsControls);
