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
		favMovies: [],
	};

	componentDidMount() {
		const { match } = this.props;

		const existFavList = localStorage.getItem('favorite_movies');

		if (existFavList) {
			this.setState({ favMovies: JSON.parse(existFavList) });
		}

		this.setState({ loading: true });

		movieApi
			.fetchMoviesDetails(match.params.movieId)
			.then(movie => this.setState({ movie }))
			.catch(error => this.setState({ error }))
			.finally(() => this.setState({ loading: false }));
	}

	componentDidUpdate(prevState) {
		if (this.state.favMovies) {
			localStorage.setItem('favorite_movies', JSON.stringify(this.state.favMovies));
		}
	}

	setMovieToLocalStorage = () => {
		this.setState(prevState => {
			return {
				favMovies: [...prevState.favMovies, this.state.movie],
				isFavorite: true,
			};
		});
	};

	removeContact = movieId => {
		this.setState(prevState => {
			return {
				favMovies: prevState.favMovies.filter(({ id }) => id !== movieId),
				isFavorite: false,
			};
		});
	};

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
