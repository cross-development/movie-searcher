//Core
import { createAction } from '@reduxjs/toolkit';

const getMoviesRequest = createAction('movies/getMoviesRequest');
const getMoviesSuccess = createAction('movies/getMoviesSuccess');
const getMoviesFailure = createAction('movies/getMoviesFailure');

const searchMoviesRequest = createAction('movie/searchMoviesRequest');
const searchMoviesSuccess = createAction('movie/searchMoviesSuccess');
const searchMoviesFailure = createAction('movie/searchMoviesFailure');

const getMovieCastsRequest = createAction('movie/getMovieCastsRequest');
const getMovieCastsSuccess = createAction('movie/getMovieCastsSuccess');
const getMovieCastsFailure = createAction('movie/getMovieCastsFailure');

const getMovieReviewsRequest = createAction('movie/getMovieReviewsRequest');
const getMovieReviewsSuccess = createAction('movie/getMovieReviewsSuccess');
const getMovieReviewsFailure = createAction('movie/getMovieReviewsFailure');

const getMovieDetailsRequest = createAction('movie/getMovieDetailsRequest');
const getMovieDetailsSuccess = createAction('movie/getMovieDetailsSuccess');
const getMovieDetailsFailure = createAction('movie/getMovieDetailsFailure');

export default {
	getMoviesRequest,
	getMoviesSuccess,
	getMoviesFailure,

	searchMoviesRequest,
	searchMoviesSuccess,
	searchMoviesFailure,

	getMovieCastsRequest,
	getMovieCastsSuccess,
	getMovieCastsFailure,

	getMovieReviewsRequest,
	getMovieReviewsSuccess,
	getMovieReviewsFailure,

	getMovieDetailsRequest,
	getMovieDetailsSuccess,
	getMovieDetailsFailure,
};
