//Core
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
//Data
import linkData from 'data/linkData.json';
//Styles
import styles from './Creator.module.css';

library.add(fab, fas);

//Chang to react-icons/fa
const Creator = ({ creator }) => (
	<div className={styles.listWrapper}>
		<ul className={styles.socialList}>
			{linkData.map(({ url, icon, label, color }) => (
				<li key={label} className={styles.socialItem}>
					<a href={url} target="_blank" rel="noopener noreferrer" style={{ color: `${color}` }}>
						<FontAwesomeIcon icon={icon} size="2x" />
					</a>
				</li>
			))}
		</ul>

		<p className={styles.heartWrapper}>
			Made with{' '}
			<span className={styles.heart}>
				<FontAwesomeIcon icon="heart" size="lg" />
			</span>{' '}
			in Kiev
		</p>
		<p className={styles.copyright}>
			© 2019 {creator} | Education:{' '}
			<a href="https://goit.ua/" target="_blank" rel="noopener noreferrer">
				GoIT
			</a>
		</p>
	</div>
);

Creator.propTypes = {
	creator: PropTypes.string.isRequired,
};

export default Creator;
