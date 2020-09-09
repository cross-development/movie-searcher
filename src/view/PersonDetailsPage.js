//Core
import React, { Component } from 'react';
//Components
import Loader from 'components/Loader';
import NotFound from 'components/NotFound';
import Notification from 'components/Notification';
import ButtonGoBack from 'components/ButtonGoBack';
import PersonDetails from 'components/PersonDetails';
//Services
import movieApi from 'services/movieApi';
//Routes
import routes from 'router';

export default class PersonDetailsPage extends Component {
	state = {
		person: '',
		error: null,
		isLoading: false,
	};

	componentDidMount() {
		const { match } = this.props;

		this.setState({ isLoading: true });

		movieApi
			.fetchPersonDetails(match.params.personId)
			.then(person => this.setState({ person }))
			.catch(error => this.setState({ error }))
			.finally(() => this.setState({ isLoading: false }));
	}

	handleGoBack = () => {
		const { location, history } = this.props;

		location.state && location.state.from
			? history.push(location.state.from)
			: history.push(routes.home);
	};

	render() {
		const { person, error, isLoading } = this.state;

		return (
			<>
				{error && <Notification message={error.message} />}

				{isLoading && <Loader onLoad={isLoading} />}

				{person === null && <NotFound />}

				<div>
					{!isLoading && person && (
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
