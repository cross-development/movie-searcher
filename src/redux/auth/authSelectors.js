const existUser = state => state.auth.user;

const getUserId = state => state.auth.user.uid;

const getUserName = state => state.auth.user.displayName;

const getError = state => state.auth.error;

export default {
	existUser,
	getUserName,
	getError,
	getUserId,
};
