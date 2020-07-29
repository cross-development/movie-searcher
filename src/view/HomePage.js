//Core
import React, { Component } from 'react';
//Components
import Loader from '../components/Loader/Loader';
import TrendPersons from '../components/TrendPersons/TrendPersons';
import MoviesList from '../components/MoviesList/MoviesList';
import Notification from '../components/Notification/Notification';
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
		const { location } = this.props;

		return (
			<>
				{!isLoading && actors.length > 0 && (
					<TrendPersons title="Trending actors" actorsData={actors} onLocation={location} />
				)}

				{error && <Notification message={error.message} />}

				{isLoading && <Loader onLoad={isLoading} />}

				{!isLoading && movies.length > 0 && (
					<MoviesList title="Trending movies" moviesData={movies} onLocation={location} />
				)}
			</>
		);
	}
}
