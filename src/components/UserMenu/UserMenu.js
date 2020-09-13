//Core
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//Redux
import { authSelectors } from 'redux/auth';
//Styles
import styles from './UserMenu.module.css';

const UserMenu = ({ avatar, name }) => (
	<div className={styles.container}>
		<div className={styles.ringWrapper}>
			<span className={styles.ring}>2</span>
		</div>
		<span className={styles.name}>{name}</span>
		<div className={styles.avatarWrapper}>
			<img src={avatar} alt="" width="32" className={styles.avatar} />
			<span className={name ? styles.online : styles.offline}></span>
		</div>
	</div>
);

UserMenu.propTypes = {
	avatar: PropTypes.string,
	name: PropTypes.string,
	onLogout: PropTypes.func,
};

const mapStateToProps = state => ({
	name: authSelectors.getUserName(state),
	avatar: 'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-7.jpg',
});

export default connect(mapStateToProps)(UserMenu);
