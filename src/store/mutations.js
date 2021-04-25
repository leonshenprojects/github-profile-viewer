export const setShowStep = (state, showStep) => {
	state.showStep = showStep;
};

export const addError = (state, error) => {
	state.errors = [...state.errors, error];
};

export const clearError = (state, fieldName) => {
	state.errors = state.errors.filter(
		(error) => error.fieldName !== fieldName,
	);
};

export const clearProfile = (state) => {
	state.profile = null;
};

export const setCurrentPage = (state, step) => {
	state.currentPage = step;
};

export const setProfile = (state, profile) => {
	if (profile.login !== state.data.username) {
		return;
	}

	state.profile = profile;
};

export const updateData = (state, newData) => {
	state.data = {
		...state.data,
		...newData,
	};
};
