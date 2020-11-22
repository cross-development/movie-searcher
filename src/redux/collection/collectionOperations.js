//Database
import * as firebase from 'firebase';
//Redux
import collectionActions from './collectionActions';

//fixed
const addCollectionMovie = ({ userId, movie }) => dispatch => {
	dispatch(collectionActions.addCollectionMovieRequest());

	try {
		const userCollection = firebase.database().ref('users/' + userId);

		userCollection.child('collection').push(movie);

		dispatch(collectionActions.addCollectionMovieSuccess());
	} catch (error) {
		dispatch(collectionActions.addCollectionMovieFailure(error));
	}
};

//Fixed
const removeCollectionMovie = ({ userId, movieId }) => dispatch => {
	dispatch(collectionActions.removeCollectionMovieRequest());

	try {
		const collectionMovies = firebase.database().ref('users/' + userId + '/collection');

		collectionMovies.once('value', snapshot =>
			snapshot.forEach(data => {
				if (data.val().id === movieId) {
					firebase
						.database()
						.ref('users/' + userId + '/collection/' + data.key)
						.remove();
				}
			}),
		);

		dispatch(collectionActions.removeCollectionMovieSuccess());
	} catch (error) {
		dispatch(collectionActions.removeCollectionMovieFailure(error));
	}
};

//fixed ?
const fetchCollectionMovies = ({ userId }) => dispatch => {
	dispatch(collectionActions.getCollectionMoviesRequest());

	try {
		const collectionMovies = firebase.database().ref('users/' + userId + '/collection');

		collectionMovies.on('value', snapshot => {
			let collectionMoviesData = [];

			if (!snapshot.val()) {
				dispatch(collectionActions.getCollectionMoviesSuccess(collectionMoviesData));
				return;
			}

			collectionMoviesData = Object.keys(snapshot.val()).reduce((acc, key) => {
				acc.push({ ...snapshot.val()[key] });
				return acc;
			}, []);

			dispatch(collectionActions.getCollectionMoviesSuccess(collectionMoviesData));
		});
	} catch (error) {
		dispatch(collectionActions.getCollectionMoviesFailure(error));
	}
};

export default {
	addCollectionMovie,
	removeCollectionMovie,
	fetchCollectionMovies,
};

// //! testing
// const fetchFavoriteMovieDetails = ({ userId, movieId }) => dispatch => {
// 	dispatch(moviesActions.getFavoriteMovieDetailsRequest());

// 	try {
// 		const favMovies = firebase.database().ref('users/' + userId + '/favorites');

// 		favMovies.on('value', snapshot =>
// 			snapshot.forEach(data => {
// 				if (data.val().id === movieId) {
// 					dispatch(moviesActions.getFavoriteMovieDetailsSuccess(data.val()));
// 				}
// 			}),
// 		);
// 	} catch (error) {
// 		dispatch(moviesActions.getFavoriteMovieDetailsFailure(error));
// 	}
// };

// const fetchFavoriteMovieDetails = ({ userId, movieId }) => dispatch => {
// 	dispatch(moviesActions.getFavoriteMovieDetailsRequest());

// 	try {
// 		const favMovies = firebase.database().ref('users/' + userId + '/favorites');

// 		favMovies.on('value', snapshot =>
// 			snapshot.forEach(data => {
// 				if (data.val().id === movieId) {
// 					dispatch(moviesActions.getFavoriteMovieDetailsSuccess(data.val()));
// 				}
// 			}),
// 		);
// 	} catch (error) {
// 		dispatch(moviesActions.getFavoriteMovieDetailsFailure(error));
// 	}
// };

// const getFavoriteMovieDetailsRequest = createAction('movies/getFavoriteMovieDetailsRequest');
// const getFavoriteMovieDetailsSuccess = createAction('movies/getFavoriteMovieDetailsSuccess');
// const getFavoriteMovieDetailsFailure = createAction('movies/getFavoriteMovieDetailsFailure');

// const getQueueMovieDetailsRequest = createAction('movies/getQueueMovieDetailsRequest');
// const getQueueMovieDetailsSuccess = createAction('movies/getQueueMovieDetailsSuccess');
// const getQueueMovieDetailsFailure = createAction('movies/getQueueMovieDetailsFailure');
