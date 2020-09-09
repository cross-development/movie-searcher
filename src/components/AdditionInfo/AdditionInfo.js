//Core
import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, NavLink } from 'react-router-dom';
//Component
import Loader from 'components/Loader';
//Services
import asyncComponents from 'services/asyncComponents';
//Styles
import styles from './AdditionInfo.module.css';

const AdditionInfo = ({ onLoading, location, match }) => (
	<div>
		<h2 className={styles.additionalTitle}>Additional information</h2>
		<ul className={styles.additionalInfoList}>
			<li className={styles.additionalInfoListItem}>
				<NavLink
					to={{
						pathname: `${match.url}/cast`,
						state: { from: location.state && location.state.from },
					}}
					className={styles.additionalInfoLink}
					activeClassName={styles.additionalInfoLinkActive}
				>
					Cast
				</NavLink>
			</li>
			<li className={styles.additionalInfoListItem}>
				<NavLink
					to={{
						pathname: `${match.url}/reviews`,
						state: { from: location.state && location.state.from },
					}}
					className={styles.additionalInfoLink}
					activeClassName={styles.additionalInfoLinkActive}
				>
					Reviews
				</NavLink>
			</li>
		</ul>

		<Suspense fallback={<Loader onLoad={onLoading} />}>
			<Switch>
				<Route path={`${match.path}/cast`} component={asyncComponents.Cast} />
				<Route path={`${match.path}/reviews`} component={asyncComponents.Reviews} />
			</Switch>
		</Suspense>
	</div>
);

AdditionInfo.defaultProps = {
	match: {},
	location: {},
	onLoading: false,
};

AdditionInfo.propTypes = {
	match: PropTypes.object,
	location: PropTypes.object,
	onLoading: PropTypes.bool,
};

export default AdditionInfo;
