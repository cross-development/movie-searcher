//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//Redux
import collectionActions from './collectionActions';

//Favorites reducer
const items = createReducer([], {
	[collectionActions.getCollectionMoviesSuccess]: (state, { payload }) => [...payload],
});

//Loading reducer
const loading = createReducer(false, {
	[collectionActions.addCollectionMovieRequest]: () => true,
	[collectionActions.addCollectionMovieSuccess]: () => false,
	[collectionActions.addCollectionMovieFailure]: () => false,

	[collectionActions.removeCollectionMovieRequest]: () => true,
	[collectionActions.removeCollectionMovieSuccess]: () => false,
	[collectionActions.removeCollectionMovieFailure]: () => false,

	[collectionActions.getCollectionMoviesRequest]: () => true,
	[collectionActions.getCollectionMoviesSuccess]: () => false,
	[collectionActions.getCollectionMoviesFailure]: () => false,
});

//Error reducer
const error = createReducer(null, {
	[collectionActions.addCollectionMovieFailure]: (state, { payload }) => payload,
	[collectionActions.removeCollectionMovieFailure]: (state, { payload }) => payload,
	[collectionActions.getCollectionMoviesFailure]: (state, { payload }) => payload,
});

export default combineReducers({
	items,
	loading,
	error,
});
