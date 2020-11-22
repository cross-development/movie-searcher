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

const getMovieDetailsRequest = createAction('movies/getMovieDetailsRequest');
const getMovieDetailsSuccess = createAction('movies/getMovieDetailsSuccess');
const getMovieDetailsFailure = createAction('movies/getMovieDetailsFailure');

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
};
