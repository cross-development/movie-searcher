const isAuthenticated = state => state.auth.user;

const getUserName = state => state.auth.user.displayName;

const getError = state => state.auth.error;

export default {
	isAuthenticated,
	getUserName,
	getError,
};
