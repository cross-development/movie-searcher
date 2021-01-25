//Core
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
//Components
import CastList from 'components/CastList';
import { Notification } from 'components/Common';
//API
import moviesAPI from 'api/movies';

const Cast = () => {
	const [cast, setCast] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const location = useLocation();
	const { movieId } = useParams();

	useEffect(() => {
		setLoading(true);

		moviesAPI
			.fetchMovieCast(movieId)
			.then(setCast)
			.catch(setError)
			.finally(() => setLoading(false));
	}, [movieId]);

	return (
		<>
			{error && <Notification message={error.message} />}

			{!loading && !error && cast.length < 1 && (
				<Notification message="We don't have any actors for this movie." />
			)}

			{cast.length > 0 && <CastList cast={cast} location={location} />}
		</>
	);
};

export default Cast;
