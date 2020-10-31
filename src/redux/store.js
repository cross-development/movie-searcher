//Core
import { configureStore } from '@reduxjs/toolkit';
//Redux
import { authReducers } from 'redux/auth';
import { actorsReducers } from 'redux/actors';
import { moviesReducers } from 'redux/movies';
import { collectionReducers } from 'redux/collection';

const store = configureStore({
	reducer: {
		auth: authReducers,
		actors: actorsReducers,
		movies: moviesReducers,
		collection: collectionReducers,
	},
});

export default store;
