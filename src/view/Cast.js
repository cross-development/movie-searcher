//Core
import React, { Component } from 'react';
//Components
import Loader from '../components/Loader/Loader';
import CastList from '../components/CastList/CastList';
import Notification from '../components/Notification/Notification';
//Services
import movieApi from '../services/movieApi';

export default class Cast extends Component {
	state = {
		casts: [],
		error: null,
		isLoading: false,
	};

	componentDidMount() {
		const { match } = this.props;
		
		this.setState({ isLoading: true });

		movieApi
			.fetchMoviesByCast(match.params.movieId)
			.then(casts => this.setState({ casts }))
			.catch(error => this.setState({ error }))
			.finally(() => this.setState({ isLoading: false }));
	}

	render() {
		const { casts, error, isLoading } = this.state;
		const { location } = this.props;

		return (
			<>
				{error && <Notification message={error.message} />}

				{isLoading && <Loader onLoad={isLoading} />}

				{!isLoading && !error && casts.length < 1 && (
					<Notification message="We don't have any actors for this movie." />
				)}

				{casts.length > 0 && <CastList castsData={casts} onLocation={location} />}
			</>
		);
	}
}
