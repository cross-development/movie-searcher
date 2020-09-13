//Core
import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
//Redux
import { authOperations } from 'redux/auth';
//Components
import AppBar from '../AppBar';
import Layout from '../Layout';
import Header from '../Header';
import Loader from '../Loader';
import Footer from '../Footer';
//Routes
import routes from 'router';
//Services
import asyncComponents from 'services/asyncComponents';

class App extends Component {
	componentDidMount() {
		this.props.onGetCurrentUser();
	}

	render() {
		return (
			<BrowserRouter>
				<Route component={Header} />

				<AppBar />

				<Layout>
					<Suspense fallback={<Loader onLoad={true} />}>
						<Switch>
							<Route path={routes.home} exact component={asyncComponents.HomePage} />
							<Route path={routes.movieDetails} component={asyncComponents.MovieDetailsPage} />
							<Route path={routes.movies} component={asyncComponents.MoviesPage} />
							<Route path={routes.personDetails} component={asyncComponents.PersonsDetailsPage} />
							<Route path={routes.persons} component={asyncComponents.PersonsPage} />
							<Route path={routes.favoriteMovies} component={asyncComponents.FavoriteMoviesPage} />
							<Route path={routes.login} component={asyncComponents.LoginPage} />
							<Route path={routes.register} component={asyncComponents.RegisterPage} />
							<Route component={asyncComponents.NotFoundPage} />
						</Switch>
					</Suspense>
				</Layout>

				<Footer />
			</BrowserRouter>
		);
	}
}

const mapDispatchToProps = {
	onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
