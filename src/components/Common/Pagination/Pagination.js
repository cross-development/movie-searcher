//Core
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
//Components
import ReactPaginate from 'react-paginate';
//Styles
import styles from './Pagination.module.css';

library.add(fas);

const Pagination = ({ totalPages, onChangePaginate }) => (
	<ReactPaginate
		previousLabel={<FontAwesomeIcon icon={['fas', 'arrow-left']} size="1x" />}
		nextLabel={<FontAwesomeIcon icon={['fas', 'arrow-right']} size="1x" />}
		breakLabel={'...'}
		breakClassName={'break-me'}
		initialPage={0}
		pageCount={totalPages}
		marginPagesDisplayed={3}
		pageRangeDisplayed={1}
		onPageChange={onChangePaginate}
		containerClassName={styles.pagination}
		activeClassName={styles.active}
	/>
);

Pagination.propTypes = {
	totalPages: PropTypes.number.isRequired,
	onChangePaginate: PropTypes.func.isRequired,
};

export default Pagination;
