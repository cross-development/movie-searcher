//Core
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
//Components
import Loader from 'components/Loader';
import MoviesList from 'components/MoviesList';
import Notification from 'components/Notification';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { collectionOperations } from 'redux/collection';

//Fixed, but it's components not tested
const FavoriteMovies = () => {
	const location = useLocation();
	const dispatch = useDispatch();

	const { user } = useSelector(state => state.auth);
	const { loading, error, favorites } = useSelector(state => state.collection);

	useEffect(() => {
		dispatch(collectionOperations.fetchFavoriteMovies(user.uid));
	}, [user.uid, dispatch]);

	return (
		<>
			{error && <Notification message={error.message} />}

			{loading && <Loader onLoad={loading} />}

			{favorites.length < 1 && <Notification message="We don't have any favorite movie." />}

			{favorites.length > 0 && <MoviesList movies={favorites} location={location} />}
		</>
	);
};

export default FavoriteMovies;
