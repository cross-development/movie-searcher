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
		const { pathname } = this.props.location;

		return (
			<header className={styles.header}>
				<MainTitle pathname={pathname} />

				<SearchForm onSubmit={this.handleChangeByQuery} placeholder="Search movie..." />

				{this.props.existUser ? <UserMenu /> : <AuthNav />}
			</header>
		);
	}
}

const mapStateToProps = state => ({
	existUser: authSelectors.existUser(state),
});

export default connect(mapStateToProps)(Header);
