//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './MainTitle.module.css';

const MainTitle = ({ title }) => {
	return <h1 className={styles.title}>{title}</h1>;
};

MainTitle.propTypes = {};

export default MainTitle;
