//Database
import * as firebase from 'firebase';

//fixed
const addCollectionMovie = ({ userId, movie }) => {
	try {
		const userCollection = firebase.database().ref('users/' + userId);

		userCollection.child('collection').push(movie);
	} catch (error) {
		throw error;
	}
};

//Fixed
const removeCollectionMovie = ({ userId, movieId }) => {
	try {
		firebase
			.database()
			.ref('users/' + userId + '/collection')
			.once('value')
			.then(snapshot =>
				snapshot.forEach(data => {
					if (data.val().id === movieId) {
						firebase
							.database()
							.ref('users/' + userId + '/collection/' + data.key)
							.remove();
					}
				}),
			);
	} catch (error) {
		throw error;
	}
};

const fetchCollectionMovies = async ({ userId }) => {
	try {
		const snapshot = await firebase
			.database()
			.ref('users/' + userId + '/collection')
			.once('value');

		let collectionMoviesData = [];

		if (!snapshot.val()) return collectionMoviesData;

		collectionMoviesData = Object.keys(snapshot.val()).reduce((acc, key) => {
			acc.push({ ...snapshot.val()[key] });
			return acc;
		}, []);

		return collectionMoviesData;
	} catch (error) {
		throw error;
	}
};

export default {
	addCollectionMovie,
	removeCollectionMovie,
	fetchCollectionMovies,
};
