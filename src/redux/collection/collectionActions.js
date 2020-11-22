//Core
import { createAction } from '@reduxjs/toolkit';

const addCollectionMovieRequest = createAction('collection/addCollectionMovieRequest');
const addCollectionMovieSuccess = createAction('collection/addCollectionMovieSuccess');
const addCollectionMovieFailure = createAction('collection/addCollectionMovieFailure');

const removeCollectionMovieRequest = createAction('collection/removeCollectionMovieRequest');
const removeCollectionMovieSuccess = createAction('collection/removeCollectionMovieSuccess');
const removeCollectionMovieFailure = createAction('collection/removeCollectionMovieFailure');

const getCollectionMoviesRequest = createAction('collection/getCollectionMoviesRequest');
const getCollectionMoviesSuccess = createAction('collection/getCollectionMoviesSuccess');
const getCollectionMoviesFailure = createAction('collection/getCollectionMoviesFailure');

export default {
	addCollectionMovieRequest,
	addCollectionMovieSuccess,
	addCollectionMovieFailure,

	removeCollectionMovieRequest,
	removeCollectionMovieSuccess,
	removeCollectionMovieFailure,

	getCollectionMoviesRequest,
	getCollectionMoviesSuccess,
	getCollectionMoviesFailure,
};
