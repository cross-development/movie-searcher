//Core
import React, { useState } from 'react';
//Components
import Login from 'components/Login';
import Loader from 'components/Loader';
import Notification from 'components/Notification';
//Context
import { userSingIn, useAuthDispatch, useAuthState } from 'context';

//Fixed
const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useAuthDispatch();
	const { loading, error } = useAuthState();

	const handleChangeEmail = ({ target: { value } }) => setEmail(value);
	const handleChangePassword = ({ target: { value } }) => setPassword(value);

	const handleSubmit = e => {
		e.preventDefault();

		userSingIn(dispatch, { email, password });

		setPassword('');
		setEmail('');
	};

	return (
		<>
			{loading && <Loader onLoad={loading} />}

			{error && <Notification message={error.message} />}

			{!loading && (
				<Login
					email={email}
					password={password}
					onSubmit={handleSubmit}
					onChangeEmail={handleChangeEmail}
					onChangePassword={handleChangePassword}
				/>
			)}
		</>
	);
};

export default LoginPage;
