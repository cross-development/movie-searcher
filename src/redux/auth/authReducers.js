//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//Redux
import authActions from './authActions';

//User reducer
const user = createReducer(null, {
	[authActions.getCurrentUserSuccess]: (state, { payload }) => payload,
	[authActions.registerSuccess]: (state, { payload }) => payload.user,
	[authActions.loginSuccess]: (state, { payload }) => payload.user,
	[authActions.logoutSuccess]: () => null,
});

//Error reducer
const error = createReducer(null, {
	[authActions.getCurrentUserFailure]: (state, { payload }) => payload,
	[authActions.registerFailure]: (state, { payload }) => payload,
	[authActions.logoutFailure]: (state, { payload }) => payload,
	[authActions.loginFailure]: (state, { payload }) => payload,
});

//Loading reducer
const loading = createReducer(false, {
	[authActions.loginRequest]: () => true,
	[authActions.loginSuccess]: () => false,
	[authActions.loginFailure]: () => false,

	[authActions.logoutRequest]: () => true,
	[authActions.logoutSuccess]: () => false,
	[authActions.logoutFailure]: () => false,

	[authActions.registerRequest]: () => true,
	[authActions.registerSuccess]: () => false,
	[authActions.registerFailure]: () => false,

	[authActions.getCurrentUserRequest]: () => true,
	[authActions.getCurrentUserSuccess]: () => false,
	[authActions.getCurrentUserFailure]: () => false,
});

export default combineReducers({
	user,
	error,
	loading,
});
