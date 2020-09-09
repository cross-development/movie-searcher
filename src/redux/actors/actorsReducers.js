//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//Redux
import actorsActions from './actorsActions';

//Items reducer
const items = createReducer([], {
	[actorsActions.getActorsSuccess]: (state, { payload }) => payload,
	[actorsActions.getActorsByQuerySuccess]: (state, { payload }) => payload,
	[actorsActions.getActorDetailsSuccess]: (state, { payload }) => payload,
});

//Loading reducer
const loading = createReducer(false, {
	[actorsActions.getActorsRequest]: () => true,
	[actorsActions.getActorsSuccess]: () => false,
	[actorsActions.getActorsFailure]: () => false,

	[actorsActions.getActorsByQueryRequest]: () => true,
	[actorsActions.getActorsByQuerySuccess]: () => false,
	[actorsActions.getActorsByQueryFailure]: () => false,

	[actorsActions.getActorDetailsRequest]: () => true,
	[actorsActions.getActorDetailsSuccess]: () => false,
	[actorsActions.getActorDetailsFailure]: () => false,
});

//Error reducer
const error = createReducer(null, {
	[actorsActions.getActorsFailure]: (state, { payload }) => payload,
	[actorsActions.getActorsByQueryFailure]: (state, { payload }) => payload,
	[actorsActions.getActorDetailsFailure]: (state, { payload }) => payload,
});

export default combineReducers({
	items,
	loading,
	error,
});
