//Core
import { createAction } from '@reduxjs/toolkit';

const getMoviesRequest = createAction('movies/getMoviesRequest');
const getMoviesSuccess = createAction('movies/getMoviesSuccess');
const getMoviesFailure = createAction('movies/getMoviesFailure');

const searchMoviesRequest = createAction('movies/searchMoviesRequest');
const searchMoviesSuccess = createAction('movies/searchMoviesSuccess');
const searchMoviesFailure = createAction('movies/searchMoviesFailure');

const getMovieCastRequest = createAction('movies/getMovieCastRequest');
const getMovieCastSuccess = createAction('movies/getMovieCastSuccess');
const getMovieCastFailure = createAction('movies/getMovieCastFailure');

const getMovieReviewsRequest = createAction('movies/getMovieReviewsRequest');
const getMovieReviewsSuccess = createAction('movies/getMovieReviewsSuccess');
const getMovieReviewsFailure = createAction('movies/getMovieReviewsFailure');

const getUpcomingMoviesRequest = createAction('movies/getUpcomingMoviesRequest');
const getUpcomingMoviesSuccess = createAction('movies/getUpcomingMoviesSuccess');
const getUpcomingMoviesFailure = createAction('movies/getUpcomingMoviesFailure');

const getMovieDetailsRequest = createAction('movie/getMovieDetailsRequest');
const getMovieDetailsSuccess = createAction('movie/getMovieDetailsSuccess');
const getMovieDetailsFailure = createAction('movie/getMovieDetailsFailure');

const getFavoriteMovieDetailsRequest = createAction('movie/getFavoriteMovieDetailsRequest');
const getFavoriteMovieDetailsSuccess = createAction('movie/getFavoriteMovieDetailsSuccess');
const getFavoriteMovieDetailsFailure = createAction('movie/getFavoriteMovieDetailsFailure');

const getQueueMovieDetailsRequest = createAction('movie/getQueueMovieDetailsRequest');
const getQueueMovieDetailsSuccess = createAction('movie/getQueueMovieDetailsSuccess');
const getQueueMovieDetailsFailure = createAction('movie/getQueueMovieDetailsFailure');

export default {
	getMoviesRequest,
	getMoviesSuccess,
	getMoviesFailure,

	searchMoviesRequest,
	searchMoviesSuccess,
	searchMoviesFailure,

	getMovieCastRequest,
	getMovieCastSuccess,
	getMovieCastFailure,

	getMovieReviewsRequest,
	getMovieReviewsSuccess,
	getMovieReviewsFailure,

	getUpcomingMoviesRequest,
	getUpcomingMoviesSuccess,
	getUpcomingMoviesFailure,

	getMovieDetailsRequest,
	getMovieDetailsSuccess,
	getMovieDetailsFailure,

	getFavoriteMovieDetailsRequest,
	getFavoriteMovieDetailsSuccess,
	getFavoriteMovieDetailsFailure,

	getQueueMovieDetailsRequest,
	getQueueMovieDetailsSuccess,
	getQueueMovieDetailsFailure,
};
