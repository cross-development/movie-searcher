//Core
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
//Components
import { Loader, Notification } from 'components/Common';
import MoviesList from 'components/Movie/MoviesList';
//API
import moviesAPI from 'api/movies';

//Fixed
const HomePage = () => {
	const [movies, setMovies] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const location = useLocation();

	useEffect(() => {
		setLoading(true);

		moviesAPI
			.fetchUpcomingMovies()
			.then(setMovies)
			.catch(setError)
			.finally(() => setLoading(false));
	}, []);

	return (
		<>
			{error && <Notification message={error.message} />}

			{loading && <Loader onLoad={loading} />}

			{!loading && movies.length > 0 && <MoviesList movies={movies} location={location} />}
		</>
	);
};

export default HomePage;
