//Core
import React, { Component } from 'react';
//Views
import NotFoundPage from './NotFoundPage';
//Components
import Loader from '../components/Loader/Loader';
import Notification from '../components/Notification/Notification';
import ButtonGoBack from '../components/ButtonGoBack/ButtonGoBack';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import AdditionInfo from '../components/AdditionInfo/AdditionInfo';
//Services
import movieApi from '../services/movieApi';
//Routes
import routes from '../routes';

export default class MovieDetailsPage extends Component {
	state = {
		movie: '',
		error: null,
		loading: false,
		isFavorite: false,
	};

	componentDidMount() {
		const { match } = this.props;

		const existFavList = localStorage.getItem('favorite_movies');

		if (existFavList) {
			const favMovies = [...JSON.parse(existFavList)];

			favMovies.find(({ id }) => {
				if (id === Number(match.params.movieId)) {
					this.setFavoriteMovie();
				}
			});
		}

		movieApi
			.fetchMoviesDetails(match.params.movieId)
			.then(movie => this.setState({ movie }))
			.catch(error => this.setState({ error }))
			.finally(() => this.setState({ loading: false }));
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

	setFavoriteMovie = () => this.setState(prevState => ({ isFavorite: !prevState.isFavorite }));

	handleGoBack = () => {
		const { location, history } = this.props;

		return location.state && location.state.from
			? history.push(location.state.from)
			: history.push(routes.home);
	};

	render() {
		const { movie, error, loading, isFavorite } = this.state;
		const { match, location } = this.props;

		return (
			<>
				{error && <Notification message={error.message} />}

				{loading && <Loader onLoad={loading} />}

				{movie === null && <NotFoundPage />}

				<div>
					{!loading && movie && (
						<>
							<ButtonGoBack onChangeClick={this.handleGoBack} />

							<MovieDetails
								movieData={movie}
								isFavorite={isFavorite}
								onAddMovie={this.setMovieToLocalStorage}
								onRemoveMovie={this.removeContact}
							/>

							<AdditionInfo onMatch={match} onLoading={loading} onLocation={location} />
						</>
					)}
				</div>
			</>
		);
	}
}
