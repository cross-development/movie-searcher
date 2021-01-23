//Database
import firebase from 'firebase';

const register = async ({ name, email, password }) => {
	try {
		await firebase.auth().createUserWithEmailAndPassword(email, password);

		const user = await firebase.auth().currentUser;
		await user.updateProfile({ displayName: name });

		const { uid, displayName } = await firebase.auth().currentUser;

		return { uid, displayName };
	} catch (error) {
		throw error;
	}
};

const login = async ({ email, password }) => {
	try {
		await firebase.auth().signInWithEmailAndPassword(email, password);
		const { uid, displayName, photoURL } = await firebase.auth().currentUser;

		return { uid, displayName, photoURL };
	} catch (error) {
		throw error;
	}
};

const logout = async () => {
	try {
		await firebase.auth().signOut();
	} catch (error) {
		throw error;
	}
};

export default { register, login, logout };
