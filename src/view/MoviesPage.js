//Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
//Redux
import { moviesOperations, moviesSelectors } from 'redux/movies';
//Components
import Loader from 'components/Loader';
import MoviesList from 'components/MoviesList';
import SearchForm from 'components/SearchForm';
import Notification from 'components/Notification';
//Utils
import getQueryString from 'utils/getQueryString';

class MoviesPage extends Component {
	componentDidMount() {
		const { location, onFetchMoviesByQuery } = this.props;
		const { query } = getQueryString(location.search);

		return query ? onFetchMoviesByQuery(query) : null;
	}

	componentDidUpdate(prevProps, prevState) {
		const { location, onFetchMoviesByQuery } = this.props;
		const { query: prevQuery } = getQueryString(prevProps.location.search);
		const { query: nextQuery } = getQueryString(location.search);

		return prevQuery !== nextQuery ? onFetchMoviesByQuery(nextQuery) : null;
	}

	handleChangeByQuery = query => {
		this.props.history.push({
			pathname: this.props.location.pathname,
			search: `query=${query}`,
		});
	};

	render() {
		const { movies, error, isLoading } = this.props;

		return (
			<>
				<SearchForm onSubmit={this.handleChangeByQuery} placeholder="Search movie..." />

				{error && <Notification message={error.message} />}

				{isLoading && <Loader onLoad={isLoading} />}

				{!isLoading && movies.length > 0 && <MoviesList {...this.props} moviesData={movies} />}
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
	onFetchMoviesByQuery: moviesOperations.fetchMoviesByQuery,
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
