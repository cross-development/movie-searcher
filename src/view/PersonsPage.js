//Core
import React, { Component } from 'react';
//Components
import Loader from '../components/Loader';
import PersonsList from '../components/PersonsList';
import SearchForm from '../components/SearchForm';
import Notification from '../components/Notification';
//Services
import movieApi from '../services/movieApi';
//Utils
import getQueryString from '../utils/getQueryString';

export default class PersonsPage extends Component {
	state = {
		persons: [],
		error: null,
		isLoading: false,
	};

	componentDidMount() {
		const { query } = getQueryString(this.props.location.search);

		return query ? this.fetchPersons(query) : '';
	}

	componentDidUpdate(prevProps, prevState) {
		const { query: prevQuery } = getQueryString(prevProps.location.search);
		const { query: nextQuery } = getQueryString(this.props.location.search);

		return prevQuery !== nextQuery ? this.fetchPersons(nextQuery) : '';
	}

	fetchPersons = query => {
		this.setState({ isLoading: true });

		movieApi
			.fetchPersonsByQuery(query)
			.then(persons => this.setState({ persons }))
			.catch(error => this.setState({ error }))
			.finally(() => this.setState({ isLoading: false }));
	};

	handleChangeByQuery = query => {
		this.props.history.push({
			pathname: this.props.location.pathname,
			search: `query=${query}`,
		});
	};

	render() {
		const { persons, error, isLoading } = this.state;

		return (
			<>
				<SearchForm onSubmit={this.handleChangeByQuery} placeholder="Search actor..." />

				{error && <Notification message={error.message} />}

				{isLoading && <Loader onLoad={isLoading} />}

				{!isLoading && persons.length > 0 && <PersonsList {...this.props} personsData={persons} />}
			</>
		);
	}
}
