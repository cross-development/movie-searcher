//Core
import React, { Component } from 'react';
//Components
import Loader from '../components/Loader/Loader';
import PersonsList from '../components/PersonsList/PersonsList';
import SearchForm from '../components/SearchForm/SearchForm';
import Notification from '../components/Notification/Notification';
//Services
import movieApi from '../services/movieApi';
//Utils
import getQueryString from '../utils/getQueryString';

export default class PersonsPage extends Component {
	state = {
		persons: [],
		error: null,
		loading: false,
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
		this.setState({ loading: true });

		movieApi
			.fetchPersonsByQuery(query)
			.then(persons => this.setState({ persons }))
			.catch(error => this.setState({ error }))
			.finally(() => this.setState({ loading: false }));
	};

	handleChangeByQuery = query => {
		this.props.history.push({
			pathname: this.props.location.pathname,
			search: `query=${query}`,
		});
	};

	render() {
		const { persons, error, loading } = this.state;
		const { location } = this.props;

		return (
			<>
				<SearchForm onSubmit={this.handleChangeByQuery} placeholder="Search actor..." />

				{error && <Notification message={error.message} />}

				{loading && <Loader onLoad={loading} />}

				{!loading && persons.length > 0 && (
					<PersonsList personsData={persons} onLocation={location} />
				)}
			</>
		);
	}
}
