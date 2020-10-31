//Core
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
//Components
import Loader from 'components/Loader';
import MoviesList from 'components/MoviesList';
import Notification from 'components/Notification';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { moviesOperations } from 'redux/movies';
//Utils
import getQueryString from 'utils/getQueryString';

//Fixed
const MoviesPage = () => {
	const dispatch = useDispatch();
	const location = useLocation();

	const { items: movies, error, loading } = useSelector(state => state.movies);

	useEffect(() => {
		dispatch(moviesOperations.fetchTrendMovies());
	}, [dispatch]);

	useEffect(() => {
		const { query } = getQueryString(location.search);

		if (query) dispatch(moviesOperations.fetchMoviesByQuery(query));
	}, [location.search, dispatch]);

	return (
		<>
			{error && <Notification message={error.message} />}

			{loading && <Loader onLoad={loading} />}

			{!loading && movies.length > 0 && <MoviesList movies={movies} location={location} />}
		</>
	);
};

export default MoviesPage;
