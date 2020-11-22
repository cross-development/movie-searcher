//Core
import React, { useEffect } from 'react';
import { useParams, useLocation, useRouteMatch } from 'react-router-dom';
//Components
import Loader from 'components/Loader';
import NotFound from 'components/NotFound';
import Notification from 'components/Notification';
import MovieDetails from 'components/MovieDetails';
import AdditionInfo from 'components/AdditionInfo';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { moviesOperations } from 'redux/movies';

//TODO: fiiiiiix it
const MovieDetailsPage = () => {
	const { item: movie, error, loading } = useSelector(state => state.movies);
	const { user } = useSelector(state => state.auth);

	const dispatch = useDispatch();

	const { movieId } = useParams();
	const location = useLocation();
	const match = useRouteMatch();

	useEffect(() => {
		dispatch(moviesOperations.fetchMovieDetails(Number(movieId)));
	}, [dispatch, movieId]);

	return (
		<>
			{error && <Notification message={error.message} />}

			{loading && <Loader onLoad={loading} />}

			{movie === null && <NotFound />}

			<div>
				{!loading && movie && (
					<>
						<MovieDetails movieData={movie} existUser={user} />

						<AdditionInfo location={location} isLoading={loading} match={match} />
					</>
				)}
			</div>
		</>
	);
};

export default MovieDetailsPage;
