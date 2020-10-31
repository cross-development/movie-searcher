//Database
import * as firebase from 'firebase';
//Redux
import authActions from './authActions';

const register = ({ name, email, password }) => async dispatch => {
	dispatch(authActions.registerRequest());

	try {
		await firebase.auth().createUserWithEmailAndPassword(email, password);

		const user = await firebase.auth().currentUser;
		await user.updateProfile({ displayName: name });

		const { uid, displayName } = await firebase.auth().currentUser;

		dispatch(authActions.registerSuccess({ uid, displayName }));
	} catch (error) {
		dispatch(authActions.registerFailure(error));
	}
};

const login = ({ email, password }) => async dispatch => {
	dispatch(authActions.loginRequest());

	try {
		await firebase.auth().signInWithEmailAndPassword(email, password);
		const { uid, displayName, photoURL } = await firebase.auth().currentUser;

		dispatch(authActions.loginSuccess({ uid, displayName, photoURL }));
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

const getCurrentUser = () => async dispatch => {
	dispatch(authActions.getCurrentUserRequest());

	try {
		await firebase.auth().onAuthStateChanged(currentUser => {
			if (currentUser) {
				const { uid, displayName, photoURL } = currentUser;

				dispatch(authActions.getCurrentUserSuccess({ uid, displayName, photoURL }));
			}
		});
	} catch (error) {
		dispatch(authActions.getCurrentUserFailure(error));
	}
};

export default { register, login, logout, getCurrentUser };
