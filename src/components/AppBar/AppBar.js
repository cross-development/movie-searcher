//Core
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//Redux
import { authSelectors } from 'redux/auth';
//Components
import Logo from '../Logo';
import AuthMenu from '../AuthMenu';
import ChatRooms from '../ChatRooms';
import Navigation from '../Navigation';
//Styles
import styles from './AppBar.module.css';

const AppBar = ({ isAuthenticated }) => (
	<aside className={styles.appBar}>
		<Logo />

		<Navigation />

		<ChatRooms isAuthenticated={isAuthenticated} />

		{isAuthenticated && <AuthMenu />}
	</aside>
);

AppBar.propTypes = {
	isAuthenticated: PropTypes.string,
};

AppBar.defaultProps = {
	isAuthenticated: null,
};

const mapStateToProps = state => ({
	isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
