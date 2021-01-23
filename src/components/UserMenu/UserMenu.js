//Core
import React from 'react';
//Context
import { useAuthState } from 'context';
//Styles
import styles from './UserMenu.module.css';

const defaultAvatar = 'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-7.jpg';

//Fixed
const UserMenu = () => {
	const {
		user: { displayName, photoURL },
	} = useAuthState();

	return (
		<div className={styles.container}>
			<div className={styles.ringWrapper}>
				<span className={styles.ring}>2</span>
			</div>

			<span className={styles.name}>{displayName}</span>

			<div className={styles.avatarWrapper}>
				<img
					src={photoURL || defaultAvatar}
					alt={displayName}
					width="32"
					className={styles.avatar}
				/>
				<span className={displayName ? styles.online : styles.offline}></span>
			</div>
		</div>
	);
};

export default UserMenu;
