//Core
import React from 'react';
import { useLocation } from 'react-router-dom';
//Components
import Loader from 'components/Loader';
import MoviesList from 'components/MoviesList';
import Notification from 'components/Notification';
//Redux
import { useSelector } from 'react-redux';

//Fixed
const FavoriteMoviesPage = () => {
	const location = useLocation();

	const { loading, error, items: movies } = useSelector(state => state.collection);

	return (
		<>
			{error && <Notification message={error.message} />}

			{loading && <Loader onLoad={loading} />}

			{movies.length < 1 && <Notification message="We don't have any favorite movies." />}

			{movies.length > 0 && <MoviesList movies={movies} location={location} />}
		</>
	);
};

export default FavoriteMoviesPage;
