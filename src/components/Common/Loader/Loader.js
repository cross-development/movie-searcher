//Core
import React from 'react';
import PropTypes from 'prop-types';
//Additional components
import PacmanLoader from 'react-spinners/PacmanLoader';
//Styles
import { css } from '@emotion/core';
import styles from './Loader.module.css';

//Custom css
const customCss = css`
	display: block;
	margin: 20% auto;
`;

//Fixed
const Loader = ({ onLoad }) => (
	<div className={styles['container']}>
		<PacmanLoader size={50} color={styles['loader-bg']} loading={onLoad} css={customCss} />
	</div>
);

Loader.defaultProps = {
	onLoad: false,
};

Loader.propTypes = {
	onLoad: PropTypes.bool,
};

export default Loader;
