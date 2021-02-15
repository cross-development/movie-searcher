//Core
import React, { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
//Components
import { Loader, Notification } from 'components/Common';
import MoviesList from 'components/Movie/MoviesList';
//API
import moviesAPI from 'api/movies';

//Fixed
const HomePage = () => {
	const [movies, setMovies] = useState([]);
	const [totalPages, setTotalPages] = useState(1);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const location = useLocation();

	const fetchAllIngredients = useCallback(currentPage => {
		setLoading(true);

		moviesAPI
			.fetchUpcomingMovies(currentPage)
			.then(({ results, total_pages }) => {
				setMovies(results);
				setTotalPages(total_pages);
			})
			.catch(setError)
			.finally(() => setLoading(false));
	}, []);

	useEffect(() => fetchAllIngredients(), [fetchAllIngredients]);

	const handleChangePaginate = ({ selected }) => fetchAllIngredients(selected + 1);

	return (
		<>
			{error && <Notification message={error.message} />}

			{loading && <Loader onLoad={loading} />}

			{movies.length > 0 && (
				<MoviesList
					movies={movies}
					location={location}
					totalPages={totalPages}
					onChangePaginate={handleChangePaginate}
				/>
			)}
		</>
	);
};

export default HomePage;
