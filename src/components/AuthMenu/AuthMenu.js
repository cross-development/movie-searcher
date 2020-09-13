//Core
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//Redux
import { authOperations } from 'redux/auth';
//Styles
import styles from './AuthMenu.module.css';

const AuthMenu = ({ onLogout }) => (
	<div className={styles.authMenu}>
		<Link to="/settings" className={styles.settings}>
			Settings
		</Link>
		<Link to="/home" onClick={onLogout} className={styles.logout}>
			Log Off
		</Link>
	</div>
);

const mapDispatchToProps = {
	onLogout: authOperations.logout,
};

export default connect(null, mapDispatchToProps)(AuthMenu);
