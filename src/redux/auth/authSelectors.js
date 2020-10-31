const existUser = state => state.auth.user;

const getUserId = state => state.auth.user.uid;

const getError = state => state.auth.error;

const getUserLoading = state => state.auth.loading;

export default {
	existUser,
	getError,
	getUserId,
	getUserLoading,
};
