//Core
import React, { Component, Suspense } from 'react';
import PropTypes from 'prop-types';
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
import PublicRoute from '../PublicRoute';
import PrivateRoute from '../PrivateRoute';
//Routes
import routes from 'router';
//Services
import asyncComponents from 'services/asyncComponents';

class App extends Component {
	static propTypes = {
		onGetCurrentUser: PropTypes.func.isRequired,
	};

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
							{routes.map(route =>
								route.private ? (
									<PrivateRoute key={route.path} {...route} />
								) : (
									<PublicRoute key={route.path} {...route} />
								),
							)}
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
