//Core
import React from 'react';
import PropTypes from 'prop-types';
//Data
import linkData from 'data/linkData.json';
//Styles
import styles from './Creator.module.css';

const Creator = ({ creator }) => (
	<div className={styles.linkWrapper}>
		<ul className={styles.socialLinks}>
			{linkData.map(({ url, icon, label }) => (
				<li>
					<a href={url} target="_blank" rel="noopener noreferrer" className={styles.item}>
						<img src={icon} alt={label} />
					</a>
				</li>
			))}
		</ul>

		<p className={styles.heartWrapper}>
			Made with <span className={styles.heart}></span> in Kiev
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
