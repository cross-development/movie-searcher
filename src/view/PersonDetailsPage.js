//Core
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
//Components
import Loader from 'components/Loader';
import NotFound from 'components/NotFound';
import Notification from 'components/Notification';
import PersonDetails from 'components/PersonDetails';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { actorsOperations } from 'redux/actors';

//Fixed
const PersonDetailsPage = () => {
	const { personId } = useParams();

	const dispatch = useDispatch();
	const { item: actor, error, loading } = useSelector(state => state.actors);

	useEffect(() => {
		dispatch(actorsOperations.fetchActorDetails(personId));
	}, [personId, dispatch]);

	return (
		<>
			{error && <Notification message={error.message} />}

			{loading && <Loader onLoad={loading} />}

			{actor === null && <NotFound />}

			<div>{!loading && actor && <PersonDetails actor={actor} />}</div>
		</>
	);
};

export default PersonDetailsPage;
