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
		const { movies, isLoading, error } = this.props;

		return (
			<>
				{error && <Notification message={error.message} />}

				{isLoading && <Loader onLoad={isLoading} />}

				{!isLoading && movies.length > 0 && <MoviesList {...this.props} moviesData={movies} />}
			</>
		);
	}
}

const mapStateToProps = state => ({
	movies: moviesSelectors.getMovies(state),
	isLoading: moviesSelectors.getLoading(state),
	error: moviesSelectors.getError(state),
});

const mapDispatchToProps = {
	onFetchUpcomingMovies: moviesOperations.fetchUpcomingMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
