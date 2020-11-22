//Core
import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useRouteMatch } from 'react-router-dom';
//Components
import Loader from 'components/Loader';
import NotFound from 'components/NotFound';
import Notification from 'components/Notification';
import MovieDetails from 'components/MovieDetails';
import AdditionInfo from 'components/AdditionInfo';
//Redux
import { useSelector } from 'react-redux';
//API
import moviesAPI from 'api/movies';
import collectionAPI from 'api/collection';

const MovieDetailsPage = () => {
	const [movie, setMovie] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [isFavorite, setIsFavorite] = useState(false);

	const { user } = useSelector(state => state.auth);

	const { movieId } = useParams();
	const location = useLocation();
	const match = useRouteMatch();

	useEffect(() => {
		if (user) {
			setLoading(true);

			collectionAPI
				.fetchCollectionMovies({ userId: user.uid })
				.then(movies => {
					movies.find(movie => {
						if (movie.id === Number(movieId)) {
							setMovie(movie);
							setIsFavorite(true);
							return false;
						}

						return false;
					});

					moviesAPI
						.fetchMovieDetails(Number(movieId))
						.then(movie => setMovie(movie))
						.catch(error => setError(error));
				})
				.catch(error => setError(error))
				.finally(() => setLoading(false));
		}
	}, [user, movieId]);

	const handleChangeCollection = () => {
		if (!isFavorite) {
			collectionAPI.addCollectionMovie({ userId: user.uid, movie });
			setIsFavorite(true);
			return;
		}

		collectionAPI.removeCollectionMovie({ userId: user.uid, movieId: Number(movieId) });
		setIsFavorite(false);
	};

	return (
		<>
			{error && error.response.status !== 404 && <Notification message={error.message} />}

			{loading && <Loader onLoad={loading} />}

			{error && error.response.status === 404 && <NotFound />}

			<div>
				{!loading && movie && (
					<>
						<MovieDetails
							existUser={user}
							movieData={movie}
							isFavorite={isFavorite}
							onChangeCollection={handleChangeCollection}
						/>

						<AdditionInfo location={location} isLoading={loading} match={match} />
					</>
				)}
			</div>
		</>
	);
};

export default MovieDetailsPage;
