//Core
import React, { Component } from 'react';
//Views
import NotFoundPage from './NotFoundPage';
//Components
import Loader from '../components/Loader/Loader';
import Notification from '../components/Notification/Notification';
import ButtonGoBack from '../components/ButtonGoBack/ButtonGoBack';
import PersonDetails from '../components/PersonDetails/PersonDetails';
//Services
import movieApi from '../services/movieApi';
//Routes
import routes from '../routes';

export default class PersonDetailsPage extends Component {
	state = {
		person: '',
		error: null,
		loading: false,
	};

	componentDidMount() {
		const { match } = this.props;

		this.setState({ loading: true });

		movieApi
			.fetchPersonDetails(match.params.personId)
			.then(person => this.setState({ person }))
			.catch(error => this.setState({ error }))
			.finally(() => this.setState({ loading: false }));
	}

	handleGoBack = () => {
		const { location, history } = this.props;

		return location.state && location.state.from
			? history.push(location.state.from)
			: history.push(routes.home);
	};

	render() {
		const { person, error, loading } = this.state;
		// const { match, location } = this.props;

		return (
			<>
				{error && <Notification message={error.message} />}

				{loading && <Loader onLoad={loading} />}

				{person === null && <NotFoundPage />}

				<div>
					{!loading && person && (
						<>
							<ButtonGoBack onChangeClick={this.handleGoBack} />

							<PersonDetails personData={person} />
						</>
					)}
				</div>
			</>
		);
	}
}
