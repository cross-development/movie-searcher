//Core
import axios from 'axios';

//Axios defaults config
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '9e07f05bee226a5aad11e2f836e260f9';

const fetchTrendMovies = () => {
	return axios
		.get(`/trending/all/day?api_key=${API_KEY}&page=1`)
		.then(({ data: { results } }) => results)
		.catch(error => {
			throw error;
		});
};

const fetchUpcomingMovies = currentPage => {
	return axios
		.get(`/movie/upcoming?api_key=${API_KEY}&page=${currentPage}`)
		.then(({ data }) => data)
		.catch(error => {
			throw error;
		});
};

const fetchNowPlayingMovies = () => {
	return axios
		.get(`/movie/now_playing?api_key=${API_KEY}&page=1`)
		.then(({ data: { results } }) => results)
		.catch(error => {
			throw error;
		});
};

const fetchMoviesByQuery = query => {
	return axios
		.get(`/search/movie?api_key=${API_KEY}&query=${query}&page=1`)
		.then(({ data: { results } }) => results)
		.catch(error => {
			throw error;
		});
};

const fetchMovieDetails = movieId => {
	return axios
		.get(`/movie/${movieId}?api_key=${API_KEY}`)
		.then(({ data }) => data)
		.catch(error => {
			throw error;
		});
};

const fetchMovieCast = movieId => {
	return axios
		.get(`/movie/${movieId}/credits?api_key=${API_KEY}`)
		.then(({ data: { cast } }) => cast)
		.catch(error => {
			throw error;
		});
};

const fetchMovieReviews = movieId => {
	return axios
		.get(`/movie/${movieId}/reviews?api_key=${API_KEY}`)
		.then(({ data: { results } }) => results)
		.catch(error => {
			throw error;
		});
};

export default {
	fetchTrendMovies,
	fetchMoviesByQuery,
	fetchMovieCast,
	fetchMovieReviews,
	fetchUpcomingMovies,
	fetchMovieDetails,
	fetchNowPlayingMovies,
};
