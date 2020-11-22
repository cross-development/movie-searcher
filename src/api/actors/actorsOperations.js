//Core
import axios from 'axios';

//Axios defaults config
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '9e07f05bee226a5aad11e2f836e260f9';

const fetchTrendActors = () => {
	return axios
		.get(`/person/popular?api_key=${API_KEY}`)
		.then(({ data: { results } }) => results)
		.catch(error => {
			throw error;
		});
};

const fetchActorsByQuery = query => {
	return axios
		.get(`/search/person?api_key=${API_KEY}&query=${query}`)
		.then(({ data: { results } }) => results)
		.catch(error => {
			throw error;
		});
};

const fetchActorDetails = actorId => {
	return axios
		.get(`/person/${actorId}?api_key=${API_KEY}`)
		.then(({ data }) => data)
		.catch(error => {
			throw error;
		});
};

export default {
	fetchTrendActors,
	fetchActorsByQuery,
	fetchActorDetails,
};
