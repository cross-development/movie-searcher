//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './ReviewsList.module.css';

const ReviewsList = ({ reviews }) => (
	<ul className={styles.reviewList}>
		{reviews.map(({ id, author, content, url }) => (
			<li key={id} className={styles.reviewItem}>
				<h3 className={styles.reviewItemTitle}>
					Written by{' '}
					<a href={url} target="_blank" rel="noopener noreferrer">
						{author}
					</a>
				</h3>
				<p className={styles.reviewItemContent}>{content}</p>
			</li>
		))}
	</ul>
);

ReviewsList.propTypes = {
	reviews: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any).isRequired).isRequired,
};

export default ReviewsList;
