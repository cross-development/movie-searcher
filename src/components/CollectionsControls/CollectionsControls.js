//Core
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//Redux
import { collectionOperations } from 'redux/collection';
//Styles
import styles from './CollectionsControls.module.css';

const CollectionsControls = ({ isFavorite, addFavMovie, removeFavMovie }) => {
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

			{/* {!isQueue ? (
					<button type="button" className={styles.favoriteButton} onClick={addQueueMovie}>
						Add to queue
					</button>
				) : (
					<button
						type="button"
						className={styles.favoriteButton}
						onClick={() => removeQueueMovie(id)}
					>
						Remove from queue
					</button>
				)} */}
		</div>
	);
};

CollectionsControls.propTypes = {
	isFavorite: PropTypes.bool.isRequired,
	addFavMovie: PropTypes.func.isRequired,
	removeFavMovie: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch, { movie, user }) => ({
	addFavMovie: () => dispatch(collectionOperations.addFavoriteMovie(user.uid, movie)),
	removeFavMovie: () => dispatch(collectionOperations.removeFavoriteMovie(user.uid, movie)),
});

export default connect(null, mapDispatchToProps)(CollectionsControls);
