//Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
//Redux
import { actorsOperations, actorsSelectors } from 'redux/actors';
//Components
import Loader from 'components/Loader';
import PersonsList from 'components/PersonsList';
import Notification from 'components/Notification';
//Utils
import getQueryString from 'utils/getQueryString';
import { act } from 'react-dom/test-utils';

class PersonsPage extends Component {
	componentDidMount() {
		this.props.onFetchTrendActors();
	}

	componentDidUpdate(prevProps, prevState) {
		const { location, onFetchActorsByQuery } = this.props;
		const { query: prevQuery } = getQueryString(prevProps.location.search);
		const { query: nextQuery } = getQueryString(location.search);

		return prevQuery !== nextQuery ? onFetchActorsByQuery(nextQuery) : null;
	}

	render() {
		const { actors, location, error, isLoading } = this.props;

		return (
			<>
				{error && <Notification message={error.message} />}

				{isLoading && <Loader onLoad={isLoading} />}

				{!isLoading && actors.length > 0 && <PersonsList actors={actors} location={location} />}
			</>
		);
	}
}

const mapStateToProps = state => ({
	error: actorsSelectors.getError(state),
	actors: actorsSelectors.getActors(state),
	isLoading: actorsSelectors.getLoading(state),
});

const mapDispatchToProps = {
	onFetchTrendActors: actorsOperations.fetchTrendActors,
	onFetchActorsByQuery: actorsOperations.fetchActorsByQuery,
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonsPage);
