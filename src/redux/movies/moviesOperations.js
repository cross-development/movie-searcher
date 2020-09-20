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

export default {
	fetchTrendMovies,
	fetchMoviesByQuery,
	fetchMovieCast,
	fetchMovieReviews,
	fetchUpcomingMovies,
};
