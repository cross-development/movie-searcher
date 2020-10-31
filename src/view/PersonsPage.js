//Core
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
//Components
import Loader from 'components/Loader';
import PersonsList from 'components/PersonsList';
import Notification from 'components/Notification';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { actorsOperations } from 'redux/actors';
//Utils
import getQueryString from 'utils/getQueryString';

//Fixed
const PersonsPage = () => {
	const dispatch = useDispatch();
	const location = useLocation();

	const { items: actors, error, loading } = useSelector(state => state.actors);

	useEffect(() => {
		dispatch(actorsOperations.fetchTrendActors());
	}, [dispatch]);

	useEffect(() => {
		const { query } = getQueryString(location.search);

		if (query) dispatch(actorsOperations.fetchActorsByQuery(query));
	}, [location.search, dispatch]);

	return (
		<>
			{error && <Notification message={error.message} />}

			{loading && <Loader onLoad={loading} />}

			{!loading && actors.length > 0 && <PersonsList actors={actors} location={location} />}
		</>
	);
};

export default PersonsPage;
