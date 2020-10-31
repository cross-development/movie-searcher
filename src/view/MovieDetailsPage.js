//Core
import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { moviesOperations, moviesSelectors } from 'redux/movies';
//Components
import Loader from 'components/Loader';
import NotFound from 'components/NotFound';
import Notification from 'components/Notification';
import MovieDetails from 'components/MovieDetails';
import AdditionInfo from 'components/AdditionInfo';

//TODO: fiiiiiix it
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

	// componentDidUpdate(prevProps, prevState) {
	// 	if (prevProps.movie !== this.props.movie) {
	// 		return;
	// 	}

	// 	const { user, match } = this.props;
	// 	const {
	// 		params: { movieId },
	// 	} = match;
	// 	this.props.onFetchFavMovieDetails(user.uid, Number(movieId));
	// }

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
								// isFavorite={movie.isFavorite}
								// isQueue={movie.isQueue}
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
	movie: moviesSelectors.getMovie(state),
	error: moviesSelectors.getError(state),
	isLoading: moviesSelectors.getLoading(state),
});

const mapDispatchToProps = {
	onFetchMovieDetails: moviesOperations.fetchMovieDetails,
	onFetchQueueMovieDetails: moviesOperations.fetchQueueMovieDetails,
	onFetchFavMovieDetails: moviesOperations.fetchFavoriteMovieDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsPage);
