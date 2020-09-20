//Core
import axios from 'axios';
//Database
import * as firebase from 'firebase';
//Redux
import movieActions from './movieActions';

//Axios defaults config
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '9e07f05bee226a5aad11e2f836e260f9';

const fetchMovieDetails = movieId => dispatch => {
	dispatch(movieActions.getMovieDetailsRequest());

	const isInCollection = { isFavorite: false, isQueue: false };

	axios
		.get(`/movie/${movieId}?api_key=${API_KEY}`)
		.then(({ data }) =>
			dispatch(movieActions.getMovieDetailsSuccess({ ...data, ...isInCollection })),
		)
		.catch(error => dispatch(movieActions.getMovieDetailsFailure(error)));
};

const fetchFavoriteMovieDetails = (userId, movieId) => dispatch => {
	dispatch(movieActions.getFavoriteMovieDetailsRequest());

	try {
		const favMovies = firebase.database().ref('users/' + userId + '/favorites');

		favMovies.on('value', snapshot =>
			snapshot.forEach(data => {
				if (data.val().id === movieId) {
					dispatch(movieActions.getFavoriteMovieDetailsSuccess(data.val()));
				}
			}),
		);
	} catch (error) {
		dispatch(movieActions.getFavoriteMovieDetailsFailure(error));
	}
};

const fetchQueueMovieDetails = (userId, movieId) => dispatch => {
	dispatch(movieActions.getQueueMovieDetailsRequest());

	try {
		const favMovies = firebase.database().ref('users/' + userId + '/queue');

		favMovies.on('value', snapshot =>
			snapshot.forEach(data => {
				if (data.val().id === movieId) {
					dispatch(movieActions.getQueueMovieDetailsSuccess(data.val()));
				}
			}),
		);
	} catch (error) {
		dispatch(movieActions.getQueueMovieDetailsFailure(error));
	}
};

export default {
	fetchMovieDetails,
	fetchFavoriteMovieDetails,
	fetchQueueMovieDetails,
};
