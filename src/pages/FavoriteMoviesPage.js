//Core
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
//Components
import Loader from 'components/Loader';
import MoviesList from 'components/MoviesList';
import Notification from 'components/Notification';
//Context
import { useAuthState } from 'context';
//API
import collectionAPI from 'api/collection';

//Fixed
const FavoriteMoviesPage = () => {
	const [movies, setMovies] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const { user } = useAuthState();

	const location = useLocation();

	useEffect(() => {
		setLoading(true);

		collectionAPI
			.fetchCollectionMovies({ userId: user.uid })
			.then(setMovies)
			.catch(setError)
			.finally(() => setLoading(false));
	}, [user.uid]);

	return (
		<>
			{error && <Notification message={error.message} />}

			{loading && <Loader onLoad={loading} />}

			{movies.length < 1 && !loading && (
				<Notification message="We don't have any favorite movies." />
			)}

			{movies.length > 0 && <MoviesList movies={movies} location={location} />}
		</>
	);
};

export default FavoriteMoviesPage;
