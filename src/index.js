//Core
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import App from 'components/App';
//Database
import './firebase';
//Context
import { AuthProvider } from './context';
//Styles
import './index.css';

ReactDOM.render(
	<AuthProvider>
		<App />
	</AuthProvider>,
	document.getElementById('root'),
);
