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

const AppBar = ({ existUser }) => (
	<aside className={styles.appBar}>
		<Logo />

		<Navigation />

		<ChatRooms existUser={existUser} />

		{existUser && <AuthMenu />}
	</aside>
);

AppBar.propTypes = {
	existUser: PropTypes.objectOf(PropTypes.any),
};

AppBar.defaultProps = {
	existUser: null,
};

const mapStateToProps = state => ({
	existUser: authSelectors.existUser(state),
});

export default connect(mapStateToProps)(AppBar);
