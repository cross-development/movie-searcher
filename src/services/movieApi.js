//Core
const API_KEY = '9e07f05bee226a5aad11e2f836e260f9';
const baseURL = 'https://api.themoviedb.org/3';

//Получает все популярные фильмы за день
const fetchTrendMovies = () => {
	return fetch(`${baseURL}/trending/all/day?api_key=${API_KEY}`)
		.then(response => response.json())
		.then(data => data.results);
};

//Получает фильм по запросу в строке поиска
const fetchMoviesByQuery = searchQuery => {
	return fetch(
		`${baseURL}/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=1&include_adult=false`,
	)
		.then(response => response.json())
		.then(data => data.results);
};

//Получает детали выбранного фильма. Если в ответ не пришел статус из диапазона 200 - 299, возвращает nall. Иначе страница крешится
const fetchMoviesDetails = movieId => {
	return fetch(`${baseURL}/movie/${movieId}?api_key=${API_KEY}`).then(response =>
		response.ok ? response.json() : null,
	);
};

//Получает информацию об актерах выбранного фильма
const fetchMoviesByCast = movieId => {
	return fetch(`${baseURL}/movie/${movieId}/credits?api_key=${API_KEY}`)
		.then(response => response.json())
		.then(data => data.cast);
};

//Получает информацию о ревью выбранного фильма
const fetchMoviesReviews = movieId => {
	return fetch(`${baseURL}/movie/${movieId}/reviews?api_key=${API_KEY}&page=1`)
		.then(response => response.json())
		.then(data => data.results);
};

//Получает всех популярных актеров
const fetchTrendPersons = () => {
	return fetch(`${baseURL}/person/popular?api_key=${API_KEY}&language=en-US&page=1`)
		.then(response => response.json())
		.then(data => data.results);
};

//Получает актера по запросу в строке поиска
const fetchPersonsByQuery = searchQuery => {
	return fetch(
		`${baseURL}/search/person?api_key=${API_KEY}&query=${searchQuery}&page=1&include_adult=false`,
	)
		.then(response => response.json())
		.then(data => data.results);
};

//Получает детали выбранного актера. Если в ответ не пришел статус из диапазона 200 - 299, возвращает nall. Без проверки страница крешится
const fetchPersonDetails = personId => {
	return fetch(`${baseURL}/person/${personId}?api_key=${API_KEY}`).then(response =>
		response.ok ? response.json() : null,
	);
};

export default {
	fetchTrendMovies,
	fetchMoviesByQuery,
	fetchMoviesDetails,
	fetchMoviesByCast,
	fetchMoviesReviews,
	fetchTrendPersons,
	fetchPersonsByQuery,
	fetchPersonDetails,
};
