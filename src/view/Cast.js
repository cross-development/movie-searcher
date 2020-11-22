//Core
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
//Components
import Loader from 'components/Loader';
import CastList from 'components/CastList';
import Notification from 'components/Notification';
//API
import moviesAPI from 'api/movies';

const Cast = () => {
	const [cast, setCast] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const location = useLocation();
	const { movieId } = useParams();

	useEffect(() => {
		moviesAPI
			.fetchMovieCast(movieId)
			.then(cast => setCast(cast))
			.catch(error => setError(error))
			.finally(() => setLoading(false));
	}, [movieId]);

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
