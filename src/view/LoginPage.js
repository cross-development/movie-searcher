//Core
import React, { useState } from 'react';
//Components
import Login from 'components/Login';
//Redux
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

//Fixed
const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	const handleChangeEmail = ({ target: { value } }) => setEmail(value);
	const handleChangePassword = ({ target: { value } }) => setPassword(value);

	const handleSubmit = e => {
		e.preventDefault();

		dispatch(authOperations.login({ email, password }));
		setPassword('');
		setEmail('');
	};

	return (
		<Login
			email={email}
			password={password}
			onSubmit={handleSubmit}
			onChangeEmail={handleChangeEmail}
			onChangePassword={handleChangePassword}
		/>
	);
};

export default LoginPage;
