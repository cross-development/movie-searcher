//Core
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
//Components
import Loader from 'components/Loader';
import MoviesList from 'components/MoviesList';
import Notification from 'components/Notification';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { moviesOperations } from 'redux/movies';

//Fixed
const HomePage = () => {
	const location = useLocation();
	const dispatch = useDispatch();

	const { items: movies, error, loading } = useSelector(state => state.movies);

	useEffect(() => {
		dispatch(moviesOperations.fetchUpcomingMovies());
	}, [dispatch]);

	return (
		<>
			{error && <Notification message={error.message} />}

			{loading && <Loader onLoad={loading} />}

			{!loading && movies.length > 0 && <MoviesList movies={movies} location={location} />}
		</>
	);
};

export default HomePage;
