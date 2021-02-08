//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import ReactPaginate from 'react-paginate';
//Styles
import styles from './Pagination.module.css';

const Pagination = ({ totalPages, onChangePaginate }) => (
	<div>
		<ReactPaginate
			previousLabel={'previous'}
			nextLabel={'next'}
			breakLabel={'...'}
			breakClassName={'break-me'}
			initialPage={0}
			pageCount={totalPages}
			marginPagesDisplayed={2}
			pageRangeDisplayed={1}
			onPageChange={onChangePaginate}
			containerClassName={styles.pagination}
			activeClassName={styles.active}
		/>
	</div>
);

Pagination.propTypes = {
	totalPages: PropTypes.number.isRequired,
	onChangePaginate: PropTypes.func.isRequired,
};

export default Pagination;
