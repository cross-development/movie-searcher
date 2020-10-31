//Database
import * as firebase from 'firebase';
//Redux
import collectionActions from './collectionActions';

const addFavoriteMovie = (userId, movie) => dispatch => {
	dispatch(collectionActions.addFavoriteMovieRequest());

	try {
		const userCollection = firebase.database().ref('users/' + userId);

		userCollection.child('favorites').push(movie);

		dispatch(collectionActions.addFavoriteMovieSuccess());
	} catch (error) {
		dispatch(collectionActions.addFavoriteMovieFailure(error));
	}
};

const removeFavoriteMovie = (userId, movieId) => dispatch => {
	dispatch(collectionActions.removeFavoriteMovieRequest());

	try {
		const favMovies = firebase.database().ref('users/' + userId + '/favorites');

		favMovies.on('value', snapshot =>
			snapshot.forEach(data => {
				if (data.val().id === movieId) {
					firebase
						.database()
						.ref('users/' + userId + '/favorites/' + data.key)
						.remove();
				}
			}),
		);

		// dispatch(collectionActions.removeFavoriteMovieSuccess(id))
	} catch (error) {
		dispatch(collectionActions.removeFavoriteMovieFailure(error));
	}
};

const fetchFavoriteMovies = userId => dispatch => {
	dispatch(collectionActions.getFavoriteMoviesRequest());

	try {
		const favMovies = firebase.database().ref('users/' + userId + '/favorites');

		favMovies.on('value', snapshot => {
			const favMovieData = Object.values(snapshot.val());

			dispatch(collectionActions.getFavoriteMoviesSuccess(favMovieData));
		});
	} catch (error) {
		dispatch(collectionActions.getFavoriteMoviesFailure(error));
	}
};

const addQueueMovie = (userId, movie) => dispatch => {
	dispatch(collectionActions.addQueueMovieRequest());

	try {
		const userCollection = firebase.database().ref('users/' + userId);

		userCollection.child('queue').push(movie);

		// dispatch(collectionActions.addQueueMovieSuccess(data));
	} catch (error) {
		dispatch(collectionActions.addQueueMovieFailure(error));
	}
};

const removeQueueMovie = (userId, movieId) => dispatch => {
	dispatch(collectionActions.removeQueueMovieRequest());

	try {
		const queMovies = firebase.database().ref('users/' + userId + '/queue');

		queMovies.on('value', snapshot =>
			snapshot.forEach(data => {
				if (data.val().id === movieId) {
					firebase
						.database()
						.ref('users/' + userId + '/queue/' + data.key)
						.remove();
				}
			}),
		);

		// dispatch(collectionActions.removeQueueMovieSuccess(id))
	} catch (error) {
		dispatch(collectionActions.removeQueueMovieFailure(error));
	}
};

const fetchQueueMovies = userId => dispatch => {
	dispatch(collectionActions.getQueueMoviesRequest());

	try {
		const queMovies = firebase.database().ref('users/' + userId + '/queue');

		queMovies.on('value', snapshot => {
			const queMovieData = Object.values(snapshot.val());

			dispatch(collectionActions.getQueueMoviesSuccess(queMovieData));
		});
	} catch (error) {
		dispatch(collectionActions.getQueueMoviesFailure(error));
	}
};

export default {
	addFavoriteMovie,
	removeFavoriteMovie,
	fetchFavoriteMovies,

	addQueueMovie,
	removeQueueMovie,
	fetchQueueMovies,
};
