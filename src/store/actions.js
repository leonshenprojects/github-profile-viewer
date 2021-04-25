import Api from '../utils/Api.js';

export const fetchProfile = async ({ commit, state }) => {
	commit('clearProfile');

	try {
		const response = await Api.get(
			`https://api.github.com/users/${state.data.username}`,
		);
		commit('setProfile', response);

		return true;
	} catch (e) {
		commit('addError', {
			fieldName: 'username',
			message: 'No match found for this username.',
		});

		return false;
	}
};
