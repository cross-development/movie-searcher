//Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
//Redux
import { actorsOperations, actorsSelectors } from 'redux/actors';
//Components
import Loader from 'components/Loader';
import NotFound from 'components/NotFound';
import Notification from 'components/Notification';
import PersonDetails from 'components/PersonDetails';
//Routes
import routes from 'router';

class PersonDetailsPage extends Component {
	componentDidMount() {
		const { match, onFetchActorDetails } = this.props;

		onFetchActorDetails(match.params.personId);
	}

	handleGoBack = () => {
		const { location, history } = this.props;

		location.state && location.state.from
			? history.push(location.state.from)
			: history.push(routes.home);
	};

	render() {
		const { actor, error, isLoading } = this.props;

		return (
			<>
				{error && <Notification message={error.message} />}

				{isLoading && <Loader onLoad={isLoading} />}

				{actor === null && <NotFound />}

				<div>{!isLoading && actor && <PersonDetails personData={actor} />}</div>
			</>
		);
	}
}

const mapStateToProps = state => ({
	actor: actorsSelectors.getActor(state),
	error: actorsSelectors.getError(state),
	isLoading: actorsSelectors.getLoading(state),
});

const mapDispatchToProps = {
	onFetchActorDetails: actorsOperations.fetchActorDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonDetailsPage);
