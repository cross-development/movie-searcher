//Core
import { configureStore } from '@reduxjs/toolkit';
//Redux
import { authReducers } from 'redux/auth';

const store = configureStore({
	reducer: {
		auth: authReducers,
	},
});

export default store;
