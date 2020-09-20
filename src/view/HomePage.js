//Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
//Redux
import { moviesOperations, moviesSelectors } from 'redux/movies';
//Components
import Loader from 'components/Loader';
import MoviesList from 'components/MoviesList';
import Notification from 'components/Notification';

class HomePage extends Component {
	componentDidMount() {
		this.props.onFetchUpcomingMovies();
	}

	render() {
		const { movies, location, isLoading, error } = this.props;

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
	onFetchUpcomingMovies: moviesOperations.fetchUpcomingMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
