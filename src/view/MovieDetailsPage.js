//Core
import React, { Component } from 'react';
//Components
import Loader from '../components/Loader';
import NotFound from '../components/NotFound';
import Notification from '../components/Notification';
import ButtonGoBack from '../components/ButtonGoBack';
import MovieDetails from '../components/MovieDetails';
import AdditionInfo from '../components/AdditionInfo';
//Services
import movieApi from '../services/movieApi';
//Routes
import routes from '../routes';

export default class MovieDetailsPage extends Component {
	state = {
		movie: '',
		error: null,
		isLoading: false,
		isFavorite: false,
	};

	componentDidMount() {
		const { match } = this.props;

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

		this.setState({ isLoading: true });

		movieApi
			.fetchMoviesDetails(match.params.movieId)
			.then(movie => this.setState({ movie }))
			.catch(error => this.setState({ error }))
			.finally(() => this.setState({ isLoading: false }));
	}

	setMovieToLocalStorage = () => {
		const existFavList = localStorage.getItem('favorite_movies');

		if (!existFavList) {
			localStorage.setItem('favorite_movies', JSON.stringify([this.state.movie]));
			this.setFavoriteMovie();
			return;
		}

		const favMovies = [...JSON.parse(existFavList), this.state.movie];
		localStorage.setItem('favorite_movies', JSON.stringify(favMovies));
		this.setFavoriteMovie();
	};

	setFavoriteMovie = () => this.setState(prevState => ({ isFavorite: !prevState.isFavorite }));

	removeContact = movieId => {
		const existFavList = localStorage.getItem('favorite_movies');

		if (!existFavList) {
			return this.setFavoriteMovie();
		}

		const favMovies = [...JSON.parse(existFavList)];
		const filteredFavMovies = favMovies.filter(({ id }) => id !== movieId);

		localStorage.setItem('favorite_movies', JSON.stringify(filteredFavMovies));
		this.setFavoriteMovie();
	};

	handleGoBack = () => {
		const { location, history } = this.props;

		location.state && location.state.from
			? history.push(location.state.from)
			: history.push(routes.home);
	};

	render() {
		const { movie, error, isLoading, isFavorite } = this.state;

		return (
			<>
				{error && <Notification message={error.message} />}

				{isLoading && <Loader onLoad={isLoading} />}

				{movie === null && <NotFound />}

				<div>
					{!isLoading && movie && (
						<>
							<ButtonGoBack onChangeClick={this.handleGoBack} />

							<MovieDetails
								movieData={movie}
								isFavorite={isFavorite}
								onAddMovie={this.setMovieToLocalStorage}
								onRemoveMovie={this.removeContact}
							/>

							<AdditionInfo {...this.props} onLoading={isLoading} />
						</>
					)}
				</div>
			</>
		);
	}
}
