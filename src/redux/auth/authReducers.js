//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//Redux
import authActions from './authActions';

//User initial state
const initialUserState = { name: null, email: null };

//User reducer
const user = createReducer(initialUserState, {
	[authActions.logoutSuccess]: () => initialUserState,
	[authActions.loginSuccess]: (state, { payload }) => payload.user,
	[authActions.registerSuccess]: (state, { payload }) => payload.user,
	[authActions.getCurrentUserSuccess]: (state, { payload }) => payload,
});

const token = createReducer(null, {
	[authActions.logoutSuccess]: () => initialUserState,
	[authActions.loginSuccess]: (state, { payload }) => payload.token,
	[authActions.registerSuccess]: (state, { payload }) => payload.token,
});

const error = createReducer(null, {
	[authActions.loginFailure]: (state, { payload }) => payload,
	[authActions.logoutFailure]: (state, { payload }) => payload,
	[authActions.registerFailure]: (state, { payload }) => payload,
	[authActions.getCurrentUserFailure]: (state, { payload }) => payload,
});

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
	token,
	error,
	loading,
});
