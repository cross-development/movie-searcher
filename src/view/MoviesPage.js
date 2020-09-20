//Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
//Redux
import { moviesOperations, moviesSelectors } from 'redux/movies';
//Components
import Loader from 'components/Loader';
import MoviesList from 'components/MoviesList';
import Notification from 'components/Notification';
//Utils
import getQueryString from 'utils/getQueryString';

class MoviesPage extends Component {
	componentDidMount() {
		this.props.onFetchTrendMovies();
	}

	componentDidUpdate(prevProps, prevState) {
		const { location, onFetchMoviesByQuery } = this.props;
		const { query: prevQuery } = getQueryString(prevProps.location.search);
		const { query: nextQuery } = getQueryString(location.search);

		return prevQuery !== nextQuery ? onFetchMoviesByQuery(nextQuery) : null;
	}

	render() {
		const { movies, location, error, isLoading } = this.props;

		return (
			<>
				{error && <Notification message={error.message} />}

				{isLoading && <Loader onLoad={isLoading} />}

				{!isLoading && movies.length > 0 && <MoviesList movies={movies} location={location} />}
			</>
		);
	}
}

const mapStateToProps = state => ({
	error: moviesSelectors.getError(state),
	movies: moviesSelectors.getMovies(state),
	isLoading: moviesSelectors.getLoading(state),
});

const mapDispatchToProps = {
	onFetchTrendMovies: moviesOperations.fetchTrendMovies,
	onFetchMoviesByQuery: moviesOperations.fetchMoviesByQuery,
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
