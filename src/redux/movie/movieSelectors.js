const getMovie = state => state.movie.item;

const getLoading = state => state.movie.loading;

const getError = state => state.movie.error;

export default {
	getMovie,
	getLoading,
	getError,
};
