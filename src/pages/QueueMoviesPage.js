//Core
import React from 'react';
import { useLocation } from 'react-router-dom';
//Components
import Loader from 'components/Loader';
import MoviesList from 'components/MoviesList';
import Notification from 'components/Notification';

//Fixed
const QueueMoviesPage = () => {
	// const location = useLocation();
	// const { loading, error, items: movies } = useSelector(state => state.collection);
	// return (
	// 	<>
	// 		{error && <Notification message={error.message} />}
	// 		{loading && <Loader onLoad={loading} />}
	// 		{movies.length < 1 && <Notification message="We don't have any movies in queue." />}
	// 		{movies.length > 0 && <MoviesList movies={movies} location={location} />}
	// 	</>
	// );
};

export default QueueMoviesPage;
