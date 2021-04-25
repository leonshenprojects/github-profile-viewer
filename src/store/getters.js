const pages = ['/', 'details', 'confirmation', 'profile'];

export const getErrorForField = (state) => (fieldName) => {
	const error = state.errors.find((error) => error.fieldName === fieldName);

	if (!error) {
		return;
	}

	return error.message;
};

export const hasErrorForField = (state) => (fieldName) => {
	return state.errors.some((error) => error.fieldName === fieldName);
};

export const hasErrors = (state) => {
	return state.errors.length > 0;
};

export const hasNoData = (state) => {
	return Object.values(state.data).every((value) => !value);
};

export const nextPage = (state) => {
	const currentPageIndex = pages.findIndex(
		(page) => page === state.currentPage,
	);

	if (currentPageIndex === -1 || currentPageIndex === pages.length - 1) {
		return null;
	}

	return pages[currentPageIndex + 1];
};

export const previousPage = (state) => {
	const currentPageIndex = pages.findIndex(
		(page) => page === state.currentPage,
	);

	if (currentPageIndex < 1) {
		return null;
	}

	return pages[currentPageIndex - 1];
};
