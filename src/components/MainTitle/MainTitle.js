//Core
import React from 'react';
import PropTypes from 'prop-types';
//Routes
import routes from 'router';
//Styles
import styles from './MainTitle.module.css';

//Fixed
const MainTitle = ({ pathname }) =>
	routes.map(
		({ path, label }) =>
			path === pathname && (
				<h1 key={path} className={styles.title}>
					{label}
				</h1>
			),
	);

MainTitle.propTypes = {
	pathname: PropTypes.string,
};

MainTitle.defaultProps = {
	pathname: '',
};

export default MainTitle;
