//Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
//Redux
import { moviesOperations, moviesSelectors } from 'redux/movies';
//Components
import Loader from 'components/Loader';
import NotFound from 'components/NotFound';
import Notification from 'components/Notification';
import MovieDetails from 'components/MovieDetails';
import AdditionInfo from 'components/AdditionInfo';

class MovieDetailsPage extends Component {
	state = {
		isFavorite: false,
	};

	componentDidMount() {
		const { match, onFetchMovieDetails } = this.props;

		const existFavList = localStorage.getItem('favorite_movies');

		if (existFavList) {
			const favMovies = [...JSON.parse(existFavList)];

			favMovies.find(({ id }) => {
				if (id === Number(match.params.movieId)) {
					return this.setFavoriteMovie();
				}

				return false;
			});
		}

		onFetchMovieDetails(match.params.movieId);
	}

	setMovieToLocalStorage = () => {
		const existFavList = localStorage.getItem('favorite_movies');

		if (!existFavList) {
			localStorage.setItem('favorite_movies', JSON.stringify([this.props.movie]));
			this.setFavoriteMovie();
			return;
		}

		const favMovies = [...JSON.parse(existFavList), this.props.movie];
		localStorage.setItem('favorite_movies', JSON.stringify(favMovies));
		this.setFavoriteMovie();
	};

	setFavoriteMovie = () => this.setState(prevState => ({ isFavorite: !prevState.isFavorite }));

	removeMovie = movieId => {
		const existFavList = localStorage.getItem('favorite_movies');

		if (!existFavList) {
			return this.setFavoriteMovie();
		}

		const favMovies = [...JSON.parse(existFavList)];
		const filteredFavMovies = favMovies.filter(({ id }) => id !== movieId);

		localStorage.setItem('favorite_movies', JSON.stringify(filteredFavMovies));
		this.setFavoriteMovie();
	};

	//TODO: проверить на null
	render() {
		const { movie, error, isLoading } = this.props;

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
								isFavorite={this.state.isFavorite}
								onAddMovie={this.setMovieToLocalStorage}
								onRemoveMovie={this.removeMovie}
							/>

							<AdditionInfo {...this.props} onLoading={isLoading} />
						</>
					)}
				</div>
			</>
		);
	}
}

const mapStateToProps = state => ({
	movie: moviesSelectors.getMovie(state),
	error: moviesSelectors.getError(state),
	isLoading: moviesSelectors.getLoading(state),
});

const mapDispatchToProps = {
	onFetchMovieDetails: moviesOperations.fetchMovieDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsPage);
