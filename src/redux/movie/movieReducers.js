//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//Redux
import movieActions from './movieActions';

//Movie reducer
const item = createReducer(null, {
	[movieActions.getMovieDetailsSuccess]: (state, { payload }) => payload,
	[movieActions.getFavoriteMovieDetailsSuccess]: (state, { payload }) => payload,
	[movieActions.getQueueMovieDetailsSuccess]: (state, { payload }) => payload,
});

//Loading reducer
const loading = createReducer(false, {
	[movieActions.getMovieDetailsRequest]: () => true,
	[movieActions.getMovieDetailsSuccess]: () => false,
	[movieActions.getMovieDetailsFailure]: () => false,

	[movieActions.getFavoriteMovieDetailsRequest]: () => true,
	[movieActions.getFavoriteMovieDetailsSuccess]: () => false,
	[movieActions.getFavoriteMovieDetailsFailure]: () => false,

	[movieActions.getQueueMovieDetailsRequest]: () => true,
	[movieActions.getQueueMovieDetailsSuccess]: () => false,
	[movieActions.getQueueMovieDetailsFailure]: () => false,
});

//Error reducer
const error = createReducer(null, {
	[movieActions.getMovieDetailsFailure]: (state, { payload }) => payload,
	[movieActions.getFavoriteMovieDetailsFailure]: (state, { payload }) => payload,
	[movieActions.getQueueMovieDetailsFailure]: (state, { payload }) => payload,
});

export default combineReducers({
	item,
	error,
	loading,
});
