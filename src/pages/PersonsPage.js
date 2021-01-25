//Core
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
//Components
import { Loader, Notification } from 'components/Common';
import PersonsList from 'components/Person/PersonsList';
//API
import actorsAPI from 'api/actors';
//Utils
import getQueryString from 'utils/getQueryString';

//Fixed
const PersonsPage = () => {
	const [actors, setActors] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const location = useLocation();

	useEffect(() => {
		setLoading(true);

		actorsAPI
			.fetchTrendActors()
			.then(setActors)
			.catch(setError)
			.finally(() => setLoading(false));
	}, []);

	useEffect(() => {
		const { query } = getQueryString(location.search);

		if (query) {
			setLoading(true);

			actorsAPI
				.fetchActorsByQuery(query)
				.then(setActors)
				.catch(setError)
				.finally(() => setLoading(false));
		}
	}, [location.search]);

	return (
		<>
			{error && <Notification message={error.message} />}

			{loading && <Loader onLoad={loading} />}

			{!loading && actors.length > 0 && <PersonsList actors={actors} location={location} />}
		</>
	);
};

export default PersonsPage;
