//Core
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//Components
import { Loader, Notification, NotFound } from 'components/Common';
import PersonDetails from 'components/Person/PersonDetails';
//API
import actorsAPI from 'api/actors';

//Fixed
const PersonDetailsPage = () => {
	const [actor, setActor] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const { personId } = useParams();

	useEffect(() => {
		setLoading(true);

		actorsAPI
			.fetchActorDetails(personId)
			.then(setActor)
			.catch(setError)
			.finally(() => setLoading(false));
	}, [personId]);

	return (
		<>
			{error && error.response.status !== 404 && <Notification message={error.message} />}

			{loading && <Loader onLoad={loading} />}

			{error && error.response.status === 404 && <NotFound />}

			<div>{!loading && actor && <PersonDetails actor={actor} />}</div>
		</>
	);
};

export default PersonDetailsPage;
