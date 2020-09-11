//Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
//Redux
import { moviesOperations, moviesSelectors } from 'redux/movies';
import { actorsOperations, actorsSelectors } from 'redux/actors';
//Components
import Loader from 'components/Loader';
import TrendPersons from 'components/TrendPersons';
import MoviesList from 'components/MoviesList';
import Notification from 'components/Notification';

class HomePage extends Component {
	componentDidMount() {
		this.props.onFetchTrendMovies();
		this.props.onFetchTrendActors();
	}

	render() {
		const { movies, actors, loadingMovies, loadingActors } = this.props;

		return (
			<>
				{!loadingActors && actors.length > 0 && (
					<TrendPersons {...this.props} title="Trending actors" actorsData={actors} />
				)}

				{/* {error && <Notification message={error.message} />} */}

				{/* {isLoading && <Loader onLoad={isLoading} />} */}

				{!loadingMovies && movies.length > 0 && (
					<MoviesList {...this.props} title="Trending movies" moviesData={movies} />
				)}
			</>
		);
	}
}

const mapStateToProps = state => ({
	movies: moviesSelectors.getMovies(state),
	actors: actorsSelectors.getActors(state),
	loadingMovies: moviesSelectors.getLoading(state),
	loadingActors: actorsSelectors.getLoading(state),
});

const mapDispatchToProps = {
	onFetchTrendMovies: moviesOperations.fetchTrendMovies,
	onFetchTrendActors: actorsOperations.fetchTrendActors,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
