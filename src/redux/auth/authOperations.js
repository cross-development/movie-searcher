//Database
import * as firebase from 'firebase';
//Redux
import authActions from './authActions';

const register = ({ name, email, password }) => async dispatch => {
	dispatch(authActions.registerRequest());

	try {
		const newUser = await firebase.auth().createUserWithEmailAndPassword(email, password);
		await newUser.user.updateProfile({ displayName: name });
		const user = newUser.user.toJSON();

		dispatch(authActions.registerSuccess(user));
	} catch (error) {
		dispatch(authActions.registerFailure(error));
	}
};

const login = ({ email, password }) => async dispatch => {
	dispatch(authActions.loginRequest());

	try {
		const currentUser = await firebase.auth().signInWithEmailAndPassword(email, password);
		const user = currentUser.user.toJSON();

		dispatch(authActions.loginSuccess(user));
	} catch (error) {
		dispatch(authActions.loginFailure(error));
	}
};

const logout = () => async dispatch => {
	dispatch(authActions.logoutRequest());

	try {
		await firebase
			.auth()
			.signOut()
			.then(() => dispatch(authActions.logoutSuccess()));
	} catch (error) {
		dispatch(authActions.logoutFailure(error));
	}
};

const getCurrentUser = () => dispatch => {
	dispatch(authActions.getCurrentUserRequest());

	try {
		firebase.auth().onAuthStateChanged(currentUser => {
			if (!currentUser) {
				return firebase.auth().signOut();
			}

			const user = currentUser.toJSON();

			dispatch(authActions.getCurrentUserSuccess(user));
		});
	} catch (error) {
		dispatch(authActions.getCurrentUserFailure(error));
	}
};

export default { register, login, logout, getCurrentUser };
