//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//Redux
import collectionActions from './collectionActions';

//Favorites and queue reducer handlers
const addMovieToCollection = (state, { payload }) => [...state, payload];

const removeMovieFromCollection = (state, { payload }) =>
	state.map(movie => (movie.id === payload.id ? payload : movie));

const getMovieFromCollection = (state, { payload }) => [...payload];

//Favorites reducer
const favorites = createReducer([], {
	[collectionActions.addFavoriteMovieSuccess]: addMovieToCollection,
	[collectionActions.removeFavoriteMovieSuccess]: removeMovieFromCollection,
	[collectionActions.getFavoriteMoviesSuccess]: getMovieFromCollection,
});

//Queue reducer
const queue = createReducer([], {
	[collectionActions.addQueueMovieSuccess]: addMovieToCollection,
	[collectionActions.removeQueueMovieSuccess]: removeMovieFromCollection,
	[collectionActions.getQueueMoviesSuccess]: getMovieFromCollection,
});

//Loading reducer
const loading = createReducer(false, {
	[collectionActions.addFavoriteMovieRequest]: () => true,
	[collectionActions.addFavoriteMovieSuccess]: () => false,
	[collectionActions.addFavoriteMovieFailure]: () => false,

	[collectionActions.removeFavoriteMovieRequest]: () => true,
	[collectionActions.removeFavoriteMovieSuccess]: () => false,
	[collectionActions.removeFavoriteMovieFailure]: () => false,

	[collectionActions.getFavoriteMoviesRequest]: () => true,
	[collectionActions.getFavoriteMoviesSuccess]: () => false,
	[collectionActions.getFavoriteMoviesFailure]: () => false,

	[collectionActions.addQueueMovieRequest]: () => true,
	[collectionActions.addQueueMovieSuccess]: () => false,
	[collectionActions.addQueueMovieFailure]: () => false,

	[collectionActions.removeQueueMovieRequest]: () => true,
	[collectionActions.removeQueueMovieSuccess]: () => false,
	[collectionActions.removeQueueMovieFailure]: () => false,

	[collectionActions.getQueueMoviesRequest]: () => true,
	[collectionActions.getQueueMoviesSuccess]: () => false,
	[collectionActions.getQueueMoviesFailure]: () => false,
});

//Error reducer
const error = createReducer(null, {
	[collectionActions.addFavoriteMovieFailure]: (state, { payload }) => payload,
	[collectionActions.removeFavoriteMovieFailure]: (state, { payload }) => payload,
	[collectionActions.getFavoriteMoviesFailure]: (state, { payload }) => payload,

	[collectionActions.addQueueMovieFailure]: (state, { payload }) => payload,
	[collectionActions.removeQueueMovieFailure]: (state, { payload }) => payload,
	[collectionActions.getQueueMoviesFailure]: (state, { payload }) => payload,
});

export default combineReducers({
	favorites,
	queue,
	loading,
	error,
});
