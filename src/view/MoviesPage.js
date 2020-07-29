//Core
import React, { Component } from 'react';
//Components
import Loader from '../components/Loader/Loader';
import MoviesList from '../components/MoviesList/MoviesList';
import SearchForm from '../components/SearchForm/SearchForm';
import Notification from '../components/Notification/Notification';
//Services
import movieApi from '../services/movieApi';
//Utils
import getQueryString from '../utils/getQueryString';

export default class MoviesPage extends Component {
	state = {
		movies: [],
		error: null,
		isLoading: false,
	};

	componentDidMount() {
		const { query } = getQueryString(this.props.location.search);

		return query ? this.fetchMovies(query) : '';
	}

	componentDidUpdate(prevProps, prevState) {
		const { query: prevQuery } = getQueryString(prevProps.location.search);
		const { query: nextQuery } = getQueryString(this.props.location.search);

		return prevQuery !== nextQuery ? this.fetchMovies(nextQuery) : '';
	}

	fetchMovies = query => {
		this.setState({ isLoading: true });

		movieApi
			.fetchMoviesByQuery(query)
			.then(movies => this.setState({ movies }))
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
		const { movies, error, isLoading } = this.state;
		const { location } = this.props;

		return (
			<>
				<SearchForm onSubmit={this.handleChangeByQuery} placeholder='Search movie...'/>

				{error && <Notification message={error.message} />}

				{isLoading && <Loader onLoad={isLoading} />}

				{!isLoading && movies.length > 0 && <MoviesList moviesData={movies} onLocation={location} />}
			</>
		);
	}
}
