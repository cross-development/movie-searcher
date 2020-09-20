//Core
import { createAction } from '@reduxjs/toolkit';

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
