//Core
import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useRouteMatch } from 'react-router-dom';
//Components
import { Loader, Notification } from 'components/Common';
import NotFound from 'components/NotFound';
import MovieDetails from 'components/Movie/MovieDetails';
import AdditionInfo from 'components/AdditionInfo';
//Context
import { useAuthState } from 'context';
//API
import moviesAPI from 'api/movies';
import collectionAPI from 'api/collection';

const MovieDetailsPage = () => {
	const [movie, setMovie] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [isFavorite, setIsFavorite] = useState(false);

	const { user } = useAuthState();

	const { movieId } = useParams();
	const location = useLocation();
	const match = useRouteMatch();

	//TODO: need to fix
	useEffect(() => {
		if (!user) {
			setLoading(true);

			moviesAPI
				.fetchMovieDetails(Number(movieId))
				.then(setMovie)
				.catch(setError)
				.finally(() => setLoading(false));
		}

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

				moviesAPI.fetchMovieDetails(Number(movieId)).then(setMovie).catch(setError);
			})
			.catch(setError)
			.finally(() => setLoading(false));
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
			{/* {error && error.response.status !== 404 && <Notification message={error.message} />} */}

			{loading && <Loader onLoad={loading} />}

			{/* {error && error.response.status === 404 && <NotFound />} */}

			<div>
				{!loading && movie && (
					<>
						<MovieDetails
							existUser={user || null}
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

// useEffect(() => {
// 	if (user) {
// 		setLoading(true);

// collectionAPI
// 	.fetchCollectionMovies({ userId: user.uid })
// 	.then(movies => {
// 		movies.find(movie => {
// 			if (movie.id === Number(movieId)) {
// 				setMovie(movie);
// 				setIsFavorite(true);
// 				return false;
// 			}

// 			return false;
// 		});

// 		moviesAPI.fetchMovieDetails(Number(movieId)).then(setMovie).catch(setError);
// 	})
// 	.catch(setError)
// 	.finally(() => setLoading(false));
// 	}
// }, [user, movieId]);
