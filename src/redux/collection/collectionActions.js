//Core
import { createAction } from '@reduxjs/toolkit';

const addFavoriteMovieRequest = createAction('collection/addFavoriteMovieRequest');
const addFavoriteMovieSuccess = createAction('collection/addFavoriteMovieSuccess');
const addFavoriteMovieFailure = createAction('collection/addFavoriteMovieFailure');

const removeFavoriteMovieRequest = createAction('collection/removeFavoriteMovieRequest');
const removeFavoriteMovieSuccess = createAction('collection/removeFavoriteMovieSuccess');
const removeFavoriteMovieFailure = createAction('collection/removeFavoriteMovieFailure');

const getFavoriteMoviesRequest = createAction('collection/getFavoriteMoviesRequest');
const getFavoriteMoviesSuccess = createAction('collection/getFavoriteMoviesSuccess');
const getFavoriteMoviesFailure = createAction('collection/getFavoriteMoviesFailure');

const addQueueMovieRequest = createAction('collection/addQueueMovieRequest');
const addQueueMovieSuccess = createAction('collection/addQueueMovieSuccess');
const addQueueMovieFailure = createAction('collection/addQueueMovieFailure');

const removeQueueMovieRequest = createAction('collection/removeQueueMovieRequest');
const removeQueueMovieSuccess = createAction('collection/removeQueueMovieSuccess');
const removeQueueMovieFailure = createAction('collection/removeQueueMovieFailure');

const getQueueMoviesRequest = createAction('collection/getQueueMoviesRequest');
const getQueueMoviesSuccess = createAction('collection/getQueueMoviesSuccess');
const getQueueMoviesFailure = createAction('collection/getQueueMoviesFailure');

export default {
	addFavoriteMovieRequest,
	addFavoriteMovieSuccess,
	addFavoriteMovieFailure,

	removeFavoriteMovieRequest,
	removeFavoriteMovieSuccess,
	removeFavoriteMovieFailure,

	getFavoriteMoviesRequest,
	getFavoriteMoviesSuccess,
	getFavoriteMoviesFailure,

	addQueueMovieRequest,
	addQueueMovieSuccess,
	addQueueMovieFailure,

	removeQueueMovieRequest,
	removeQueueMovieSuccess,
	removeQueueMovieFailure,

	getQueueMoviesRequest,
	getQueueMoviesSuccess,
	getQueueMoviesFailure,
};
