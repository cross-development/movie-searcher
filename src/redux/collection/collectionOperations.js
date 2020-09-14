//Core
import axios from 'axios';
//Redux
import collectionActions from './collectionActions';

//Axios defaults config
const backendBaseURL = 'https://goit-phonebook-api.herokuapp.com';

const addFavoriteMovie = description => dispatch => {
	dispatch(collectionActions.addFavoriteMovieRequest());

	axios
		.post(`${backendBaseURL}/favorites`, { description })
		.then(({ data }) => dispatch(collectionActions.addFavoriteMovieSuccess(data)))
		.catch(error => dispatch(collectionActions.addFavoriteMovieFailure(error)));
};

const removeFavoriteMovie = id => dispatch => {
	dispatch(collectionActions.removeFavoriteMovieRequest());

	axios
		.delete(`${backendBaseURL}/favorites/${id}`)
		.then(() => dispatch(collectionActions.removeFavoriteMovieSuccess(id)))
		.catch(error => dispatch(collectionActions.removeFavoriteMovieFailure(error)));
};

const fetchFavoriteMovies = () => dispatch => {
	dispatch(collectionActions.getFavoriteMoviesRequest());

	axios
		.get(`${backendBaseURL}/favorites`)
		.then(({ data }) => dispatch(collectionActions.getFavoriteMoviesSuccess(data)))
		.catch(error => dispatch(collectionActions.getFavoriteMoviesFailure(error)));
};

const addQueueMovie = description => dispatch => {
	dispatch(collectionActions.addQueueMovieRequest());

	axios
		.post(`${backendBaseURL}/queue`, { description })
		.then(({ data }) => dispatch(collectionActions.addQueueMovieSuccess(data)))
		.catch(error => dispatch(collectionActions.addQueueMovieFailure(error)));
};

const removeQueueMovie = id => dispatch => {
	dispatch(collectionActions.removeQueueMovieRequest());

	axios
		.delete(`${backendBaseURL}/queue/${id}`)
		.then(() => dispatch(collectionActions.removeQueueMovieSuccess(id)))
		.catch(error => dispatch(collectionActions.removeQueueMovieFailure(error)));
};

const fetchQueueMovies = () => dispatch => {
	dispatch(collectionActions.getQueueMoviesRequest());

	axios
		.get(`${backendBaseURL}/queue`)
		.then(({ data }) => dispatch(collectionActions.getQueueMoviesSuccess(data)))
		.catch(error => dispatch(collectionActions.getQueueMoviesFailure(error)));
};

export default {
	addFavoriteMovie,
	removeFavoriteMovie,
	fetchFavoriteMovies,

	addQueueMovie,
	removeQueueMovie,
	fetchQueueMovies,
};
