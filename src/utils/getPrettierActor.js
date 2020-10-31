//Utils
import getPosterUrl from 'utils/getPosterUrl';
import getReversDate from 'utils/getReversDate';
//Assets
import getDefaultAvatar from 'assets/unnamed.jpg';

export function getPrettierActorDetails(actor) {
	const { profile_path, name, birthday, deathday, biography, place_of_birth } = actor;

	const poster = profile_path ? `${getPosterUrl}${profile_path}` : getDefaultAvatar;
	const dayOfBirth = birthday ? getReversDate(birthday) : 'No data available';
	const dayOfDeath = deathday ? getReversDate(deathday) : 'Present';
	const placeOfBirth = place_of_birth ? place_of_birth : 'No data available';
	const bioInfo = biography ? biography : 'No data available';

	return {
		name,
		poster,
		dayOfBirth,
		dayOfDeath,
		placeOfBirth,
		bioInfo,
	};
}
