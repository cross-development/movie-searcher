//Core
import axios from 'axios';
//Database
import * as firebase from 'firebase';
//Redux
import moviesActions from './moviesActions';

//Axios defaults config
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '9e07f05bee226a5aad11e2f836e260f9';

const fetchTrendMovies = () => dispatch => {
	dispatch(moviesActions.getMoviesRequest());

	axios
		.get(`/trending/all/day?api_key=${API_KEY}&page=1`)
		.then(({ data: { results } }) => dispatch(moviesActions.getMoviesSuccess(results)))
		.catch(error => dispatch(moviesActions.getMoviesFailure(error)));
};

const fetchUpcomingMovies = () => dispatch => {
	dispatch(moviesActions.getUpcomingMoviesRequest());

	axios
		.get(`/movie/upcoming?api_key=${API_KEY}&page=1`)
		.then(({ data: { results } }) => dispatch(moviesActions.getUpcomingMoviesSuccess(results)))
		.catch(error => dispatch(moviesActions.getUpcomingMoviesFailure(error)));
};

const fetchMoviesByQuery = query => dispatch => {
	dispatch(moviesActions.searchMoviesRequest());

	axios
		.get(`/search/movie?api_key=${API_KEY}&query=${query}&page=1`)
		.then(({ data: { results } }) => dispatch(moviesActions.searchMoviesSuccess(results)))
		.catch(error => dispatch(moviesActions.searchMoviesFailure(error)));
};

const fetchMovieCast = movieId => dispatch => {
	dispatch(moviesActions.getMovieCastRequest());

	axios
		.get(`/movie/${movieId}/credits?api_key=${API_KEY}`)
		.then(({ data: { cast } }) => dispatch(moviesActions.getMovieCastSuccess(cast)))
		.catch(error => dispatch(moviesActions.getMovieCastFailure(error)));
};

const fetchMovieReviews = movieId => dispatch => {
	dispatch(moviesActions.getMovieReviewsRequest());

	axios
		.get(`/movie/${movieId}/reviews?api_key=${API_KEY}`)
		.then(({ data: { results } }) => dispatch(moviesActions.getMovieReviewsSuccess(results)))
		.catch(error => dispatch(moviesActions.getMovieReviewsFailure(error)));
};

const fetchMovieDetails = movieId => dispatch => {
	dispatch(moviesActions.getMovieDetailsRequest());

	const isInCollection = { isFavorite: false, isQueue: false };

	axios
		.get(`/movie/${movieId}?api_key=${API_KEY}`)
		.then(({ data }) =>
			dispatch(moviesActions.getMovieDetailsSuccess({ ...data, ...isInCollection })),
		)
		.catch(error => dispatch(moviesActions.getMovieDetailsFailure(error)));
};

const fetchFavoriteMovieDetails = (userId, movieId) => dispatch => {
	dispatch(moviesActions.getFavoriteMovieDetailsRequest());

	try {
		const favMovies = firebase.database().ref('users/' + userId + '/favorites');

		favMovies.on('value', snapshot =>
			snapshot.forEach(data => {
				if (data.val().id === movieId) {
					dispatch(moviesActions.getFavoriteMovieDetailsSuccess(data.val()));
				}
			}),
		);
	} catch (error) {
		dispatch(moviesActions.getFavoriteMovieDetailsFailure(error));
	}
};

const fetchQueueMovieDetails = (userId, movieId) => dispatch => {
	dispatch(moviesActions.getQueueMovieDetailsRequest());

	try {
		const favMovies = firebase.database().ref('users/' + userId + '/queue');

		favMovies.on('value', snapshot =>
			snapshot.forEach(data => {
				if (data.val().id === movieId) {
					dispatch(moviesActions.getQueueMovieDetailsSuccess(data.val()));
				}
			}),
		);
	} catch (error) {
		dispatch(moviesActions.getQueueMovieDetailsFailure(error));
	}
};

export default {
	fetchTrendMovies,
	fetchMoviesByQuery,
	fetchMovieCast,
	fetchMovieReviews,
	fetchUpcomingMovies,
	fetchMovieDetails,
	fetchFavoriteMovieDetails,
	fetchQueueMovieDetails,
};
