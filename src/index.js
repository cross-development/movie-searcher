//Core
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//Components
import App from 'components/App';
//Database
import * as firebase from 'firebase/app';
//Redux
import store from 'redux/store';
//Styles
import './index.css';

const firebaseConfig = {
	apiKey: 'AIzaSyCj4tiSEHiP650wdb8DWOiSNuUFDDWNkoY',
	authDomain: 'dvs-movie-searcher.firebaseapp.com',
	databaseURL: 'https://dvs-movie-searcher.firebaseio.com',
	projectId: 'dvs-movie-searcher',
	storageBucket: 'dvs-movie-searcher.appspot.com',
	messagingSenderId: '635164708677',
	appId: '1:635164708677:web:081ccfe6525aa71859b82c',
	measurementId: 'G-12JQ49C3E2',
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);
