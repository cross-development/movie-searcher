//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//Redux
import moviesActions from './moviesActions';

//Items reducer
const items = createReducer([], {
	[moviesActions.getMoviesSuccess]: (state, { payload }) => payload,
	[moviesActions.searchMoviesSuccess]: (state, { payload }) => payload,
	[moviesActions.getUpcomingMoviesSuccess]: (state, { payload }) => payload,
});

const item = createReducer('', {
	[moviesActions.getMovieDetailsSuccess]: (state, { payload }) => payload,
});

//Cast reducer
const cast = createReducer([], {
	[moviesActions.getMovieCastSuccess]: (state, { payload }) => payload,
});

//Reviews reducer
const reviews = createReducer([], {
	[moviesActions.getMovieReviewsSuccess]: (state, { payload }) => payload,
});

//TODO: переписать на addMatcher для общей загрузки https://redux-toolkit.js.org/api/createReducer
//Loading reducer
const loading = createReducer(false, {
	[moviesActions.getMoviesRequest]: () => true,
	[moviesActions.getMoviesSuccess]: () => false,
	[moviesActions.getMoviesFailure]: () => false,

	[moviesActions.searchMoviesRequest]: () => true,
	[moviesActions.searchMoviesSuccess]: () => false,
	[moviesActions.searchMoviesFailure]: () => false,

	[moviesActions.getMovieCastRequest]: () => true,
	[moviesActions.getMovieCastSuccess]: () => false,
	[moviesActions.getMovieCastFailure]: () => false,

	[moviesActions.getMovieDetailsRequest]: () => true,
	[moviesActions.getMovieDetailsSuccess]: () => false,
	[moviesActions.getMovieDetailsFailure]: () => false,

	[moviesActions.getMovieReviewsRequest]: () => true,
	[moviesActions.getMovieReviewsSuccess]: () => false,
	[moviesActions.getMovieReviewsFailure]: () => false,

	[moviesActions.getUpcomingMoviesRequest]: () => true,
	[moviesActions.getUpcomingMoviesSuccess]: () => false,
	[moviesActions.getUpcomingMoviesFailure]: () => false,
});

//Error reducer
const error = createReducer(null, {
	[moviesActions.getMoviesFailure]: (state, { payload }) => payload,
	[moviesActions.searchMoviesFailure]: (state, { payload }) => payload,
	[moviesActions.getMovieCastFailure]: (state, { payload }) => payload,
	[moviesActions.getMovieDetailsFailure]: (state, { payload }) => payload,
	[moviesActions.getMovieReviewsFailure]: (state, { payload }) => payload,
	[moviesActions.getUpcomingMoviesFailure]: (state, { payload }) => payload,
});

export default combineReducers({
	cast,
	item,
	items,
	error,
	loading,
	reviews,
});
