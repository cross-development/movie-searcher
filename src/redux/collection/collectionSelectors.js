const getFavoriteMovies = state => state.collection.favorites;

const getQueueMovies = state => state.collection.queue;

const getLoading = state => state.collection.loading;

const getError = state => state.collection.error;

export default {
	getFavoriteMovies,
	getQueueMovies,
	getLoading,
	getError,
};
