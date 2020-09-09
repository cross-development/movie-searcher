//Core
import axios from 'axios';
//Redux
import actorsActions from './actorsActions';

//Axios defaults config
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '9e07f05bee226a5aad11e2f836e260f9';

const fetchTrendActors = () => dispatch => {
	dispatch(actorsActions.getActorsRequest());

	axios
		.get(`/person/popular?api_key=${API_KEY}`)
		.then(({ results }) => dispatch(actorsActions.getActorsSuccess(results)))
		.catch(error => dispatch(actorsActions.getActorsFailure(error)));
};

const fetchActorsByQuery = query => dispatch => {
	dispatch(actorsActions.getActorsByQueryRequest());

	axios
		.get(`/search/person?api_key=${API_KEY}&query=${query}`)
		.then(({ results }) => dispatch(actorsActions.getActorsByQuerySuccess(results)))
		.catch(error => dispatch(actorsActions.getActorsByQueryFailure(error)));
};

const fetchActorDetails = actorId => dispatch => {
	dispatch(actorsActions.getActorDetailsRequest());

	axios
		.get(`/person/${actorId}?api_key=${API_KEY}`)
		.then(data => dispatch(actorsActions.getActorDetailsSuccess(data)))
		.catch(error => dispatch(actorsActions.getActorDetailsFailure(error)));
};

export default {
	fetchTrendActors,
	fetchActorsByQuery,
	fetchActorDetails,
};
