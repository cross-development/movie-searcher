//Core
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//Redux
import { authReducers } from 'redux/auth';
import { actorsReducers } from 'redux/actors';
import { moviesReducers } from 'redux/movies';
import { collectionReducers } from 'redux/collection';

const authPersistConfig = {
	key: 'auth',
	storage,
	whitelist: ['token'],
};

export const store = configureStore({
	reducer: {
		actors: actorsReducers,
		movies: moviesReducers,
		collection: collectionReducers,
		auth: persistReducer(authPersistConfig, authReducers),
	},

	middleware: getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	}),
});

export const persistor = persistStore(store);
