//Core
import axios from 'axios';
//Redux
import authActions from './authActions';

//Axios defaults config
const backendBaseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
	set(token) {
		axios.defaults.headers.common.Authorization = `Bearer ${token}`;
	},

	unset() {
		axios.defaults.headers.common.Authorization = '';
	},
};

const register = credential => dispatch => {
	dispatch(authActions.registerRequest());

	axios
		.post(`${backendBaseURL}/users/signup`, credential)
		.then(({ data }) => {
			token.set(data.token);
			dispatch(authActions.registerSuccess(data));
		})
		.catch(error => dispatch(authActions.registerFailure(error)));
};

const login = credential => dispatch => {
	dispatch(authActions.loginRequest());

	axios
		.post(`${backendBaseURL}/users/login`, credential)
		.then(({ data }) => {
			token.set(data.token);
			dispatch(authActions.loginSuccess(data));
		})
		.catch(error => dispatch(authActions.loginFailure(error)));
};

const logout = () => dispatch => {
	dispatch(authActions.logoutRequest());

	axios
		.post(`${backendBaseURL}/users/logout`)
		.then(() => {
			token.unset();
			dispatch(authActions.logoutSuccess());
		})
		.catch(error => dispatch(authActions.logoutFailure(error)));
};

const getCurrentUser = () => (dispatch, getState) => {
	const state = getState();
	const { token: existToken } = state.auth;

	if (!existToken) {
		return;
	}

	token.set(existToken);
	dispatch(authActions.getCurrentUserRequest());

	axios
		.get(`${backendBaseURL}/users/current`)
		.then(({ data }) => dispatch(authActions.getCurrentUserSuccess(data)))
		.catch(error => dispatch(authActions.getCurrentUserFailure(error)));
};

export default { register, login, logout, getCurrentUser };
