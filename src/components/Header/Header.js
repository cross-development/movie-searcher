//Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
//Redux
import { authSelectors } from 'redux/auth';
//Components
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import MainTitle from '../MainTitle';
import SearchForm from '../SearchForm';
//Styles
import styles from './Header.module.css';

class Header extends Component {
	handleChangeByQuery = query => {
		this.props.history.push({
			pathname: this.props.location.pathname,
			search: `query=${query}`,
		});
	};

	render() {
		return (
			<header className={styles.header}>
				<MainTitle title="Films" />

				<SearchForm onSubmit={this.handleChangeByQuery} placeholder="Search movie..." />

				{this.props.isAuthenticated ? <UserMenu /> : <AuthNav />}
			</header>
		);
	}
}

const mapStateToProps = state => ({
	isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Header);
