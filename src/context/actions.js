//API
import authAPI from '../api/auth';
//Database
import firebase from 'firebase';

export const userSingUp = async (dispatch, payload) => {
	try {
		dispatch({ type: 'REQUEST_REGISTER' });

		const newUser = await authAPI.register({ ...payload });

		dispatch({ type: 'REGISTER_SUCCESS', payload: newUser });

		localStorage.setItem('currentUser', JSON.stringify(newUser));
	} catch (error) {
		dispatch({ type: 'REGISTER_ERROR', payload: error });
	}
};

export const userSingIn = async (dispatch, payload) => {
	try {
		dispatch({ type: 'REQUEST_LOGIN' });

		const currentUser = await authAPI.login({ ...payload });

		dispatch({ type: 'LOGIN_SUCCESS', payload: currentUser });

		localStorage.setItem('currentUser', JSON.stringify(currentUser));
	} catch (error) {
		dispatch({ type: 'LOGIN_ERROR', payload: error });
	}
};

export const userSignOut = async dispatch => {
	try {
		dispatch({ type: 'REQUEST_LOGOUT' });

		await authAPI.logout();

		dispatch({ type: 'LOGOUT_SUCCESS' });

		localStorage.removeItem('currentUser');
	} catch (error) {
		dispatch({ type: 'LOGOUT_ERROR', payload: error });
	}
};

export const getCurrentUser = async dispatch => {
	try {
		dispatch({ type: 'REQUEST_CURRENT_USER' });

		await firebase.auth().onAuthStateChanged(currentUser => {
			if (!currentUser) {
				dispatch({ type: 'LOGOUT_SUCCESS' });
				localStorage.removeItem('currentUser');
				return;
			}

			const { uid, displayName, photoURL } = currentUser;
			const user = { uid, displayName, photoURL };

			dispatch({ type: 'CURRENT_USER_SUCCESS', payload: user });
		});
	} catch (error) {
		dispatch({ type: 'CURRENT_USER_ERROR', payload: error });
	}
};
