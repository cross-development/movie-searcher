//Core
import axios from 'axios';
//Redux
import moviesActions from './moviesActions';

//Axios defaults config
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '9e07f05bee226a5aad11e2f836e260f9';

const fetchTrendMovies = () => dispatch => {
	dispatch(moviesActions.getMoviesRequest());

	axios
		.get(`/trending/all/day?api_key=${API_KEY}`)
		.then(({ results }) => dispatch(moviesActions.getMoviesSuccess(results)))
		.catch(error => dispatch(moviesActions.getMoviesFailure(error)));
};

const fetchMoviesByQuery = query => dispatch => {
	dispatch(moviesActions.searchMoviesRequest());

	axios
		.get(`/search/movie?api_key=${API_KEY}&query=${query}`)
		.then(({ results }) => dispatch(moviesActions.searchMoviesSuccess(results)))
		.catch(error => dispatch(moviesActions.searchMoviesFailure(error)));
};

const fetchMovieDetails = movieId => dispatch => {
	dispatch(moviesActions.getMovieDetailsRequest());

	axios
		.get(`/movie/${movieId}?api_key=${API_KEY}`)
		.then(data => dispatch(moviesActions.getMovieDetailsSuccess(data)))
		.catch(error => dispatch(moviesActions.getMovieDetailsFailure(error)));
};

const fetchMovieCast = movieId => dispatch => {
	dispatch(moviesActions.getMovieCastRequest());

	axios
		.get(`/movie/${movieId}/credits?api_key=${API_KEY}`)
		.then(({ results }) => dispatch(moviesActions.getMovieCastSuccess(results)))
		.catch(error => dispatch(moviesActions.getMovieCastFailure(error)));
};

const fetchMovieReviews = movieId => dispatch => {
	dispatch(moviesActions.getMovieReviewsRequest());

	axios
		.get(`/movie/${movieId}/reviews?api_key=${API_KEY}`)
		.then(({ results }) => dispatch(moviesActions.getMovieReviewsSuccess(results)))
		.catch(error => dispatch(moviesActions.getMovieReviewsFailure(error)));
};

export default {
	fetchTrendMovies,
	fetchMoviesByQuery,
	fetchMovieDetails,
	fetchMovieCast,
	fetchMovieReviews,
};
