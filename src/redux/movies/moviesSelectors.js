const getMovies = state => state.movies.items;

const getLoading = state => state.movies.loading;

const getError = state => state.movies.error;

const getCast = state => state.movies.cast;

const getReviews = state => state.movies.reviews;

export default {
	getMovies,
	getLoading,
	getError,
	getCast,
	getReviews,
};
