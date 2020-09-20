//Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
//Redux
import { authSelectors } from 'redux/auth';
import { movieOperations, movieSelectors } from 'redux/movie';
//Components
import Loader from 'components/Loader';
import NotFound from 'components/NotFound';
import Notification from 'components/Notification';
import MovieDetails from 'components/MovieDetails';
import AdditionInfo from 'components/AdditionInfo';

class MovieDetailsPage extends Component {
	componentDidMount() {
		const { user, match, location } = this.props;
		const {
			params: { movieId },
		} = match;

		console.log(location.state.from.pathname);

		if (location.state.from.pathname === '/favorites') {
			this.props.onFetchFavMovieDetails(user.uid, Number(movieId));
			return;
		}

		if (location.state.from.pathname === '/queue') {
			this.props.onFetchQueueMovieDetails(user.uid, Number(movieId));
			return;
		}

		this.props.onFetchMovieDetails(Number(movieId));
	}

	render() {
		const { movie, user, error, isLoading } = this.props;

		return (
			<>
				{error && <Notification message={error.message} />}

				{isLoading && <Loader onLoad={isLoading} />}

				{movie === null && <NotFound />}
				<div>
					{!isLoading && movie && (
						<>
							<MovieDetails
								movieData={movie}
								existUser={user}
								isFavorite={movie.isFavorite}
								isQueue={movie.isQueue}
							/>

							<AdditionInfo {...this.props} />
						</>
					)}
				</div>
			</>
		);
	}
}

const mapStateToProps = state => ({
	user: authSelectors.existUser(state),
	movie: movieSelectors.getMovie(state),
	error: movieSelectors.getError(state),
	isLoading: movieSelectors.getLoading(state),
});

const mapDispatchToProps = {
	onFetchMovieDetails: movieOperations.fetchMovieDetails,
	onFetchQueueMovieDetails: movieOperations.fetchQueueMovieDetails,
	onFetchFavMovieDetails: movieOperations.fetchFavoriteMovieDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsPage);
