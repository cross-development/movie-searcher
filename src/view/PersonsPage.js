//Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
//Redux
import { actorsOperations, actorsSelectors } from 'redux/actors';
//Components
import Loader from 'components/Loader';
import PersonsList from 'components/PersonsList';
import SearchForm from 'components/SearchForm';
import Notification from 'components/Notification';
//Services
import movieApi from 'services/movieApi';
//Utils
import getQueryString from 'utils/getQueryString';

class PersonsPage extends Component {
	componentDidMount() {
		const { location, onFetchActorsByQuery } = this.props;
		const { query } = getQueryString(location.search);

		return query ? onFetchActorsByQuery(query) : null;
	}

	componentDidUpdate(prevProps, prevState) {
		const { location, onFetchActorsByQuery } = this.props;
		const { query: prevQuery } = getQueryString(prevProps.location.search);
		const { query: nextQuery } = getQueryString(location.search);

		return prevQuery !== nextQuery ? onFetchActorsByQuery(nextQuery) : null;
	}

	handleChangeByQuery = query => {
		this.props.history.push({
			pathname: this.props.location.pathname,
			search: `query=${query}`,
		});
	};

	render() {
		const { actors, error, isLoading } = this.props;

		return (
			<>
				<SearchForm onSubmit={this.handleChangeByQuery} placeholder="Search actor..." />

				{error && <Notification message={error.message} />}

				{isLoading && <Loader onLoad={isLoading} />}

				{!isLoading && actors.length > 0 && <PersonsList {...this.props} personsData={actors} />}
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
	onFetchActorsByQuery: actorsOperations.fetchActorsByQuery,
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonsPage);
