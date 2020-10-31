//Core
import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
//Components
import Loader from 'components/Loader';
import CastList from 'components/CastList';
import Notification from 'components/Notification';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { moviesOperations } from 'redux/movies';

const Cast = () => {
	const { cast, error, loading } = useSelector(state => state.movies);
	const dispatch = useDispatch();

	const { movieId } = useParams();
	const location = useLocation();

	//TODO: fiiiiiix it - re-render after click to link
	useEffect(() => {
		dispatch(moviesOperations.fetchMovieCast(movieId));
	}, [movieId, dispatch]);

	return (
		<>
			{error && <Notification message={error.message} />}

			{loading && <Loader onLoad={loading} />}

			{!loading && !error && cast.length < 1 && (
				<Notification message="We don't have any actors for this movie." />
			)}

			{cast.length > 0 && <CastList cast={cast} location={location} />}
		</>
	);
};

export default Cast;
