//Core
import React, { Component } from 'react';
//Components
import Loader from '../components/Loader';
import TrendPersons from '../components/TrendPersons';
import MoviesList from '../components/MoviesList';
import Notification from '../components/Notification';
//Services
import movieApi from '../services/movieApi';

export default class HomePage extends Component {
	state = {
		movies: [],
		actors: [],
		error: null,
		isLoading: false,
	};

	componentDidMount() {
		this.setState({ isLoading: true });

		movieApi
			.fetchTrendMovies()
			.then(movies => this.setState({ movies }))
			.catch(error => this.setState({ error }))
			.finally(() => this.setState({ isLoading: false }));

		movieApi
			.fetchTrendPersons()
			.then(actors => this.setState({ actors }))
			.catch(error => this.setState({ error }));
	}

	render() {
		const { movies, actors, error, isLoading } = this.state;

		return (
			<>
				{!isLoading && actors.length > 0 && (
					<TrendPersons {...this.props} title="Trending actors" actorsData={actors} />
				)}

				{error && <Notification message={error.message} />}

				{isLoading && <Loader onLoad={isLoading} />}

				{!isLoading && movies.length > 0 && (
					<MoviesList {...this.props} title="Trending movies" moviesData={movies} />
				)}
			</>
		);
	}
}
