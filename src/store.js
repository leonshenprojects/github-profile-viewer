import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentPage: 'intro',
        data: {
            firstName: '',
            lastName: '',
            userName: '',
        },
        errors: [],
    },
    mutations: {
        clearError(state, fieldName) {
            state.errors = state.errors.filter(error => error.fieldName !== fieldName);
        },
		setcurrentPage(state, step) {
			state.currentPage = step;
		},
        updateData(state, newData) {
            state.data = {
                ...state.data,
                ...newData,
            };
        },
        validatePageData(state) {
            if (state.currentPage === 'details') {
                state.errors = [
                    ...state.errors,
                    ...compileErrors(state.data, ['firstName', 'lastName', 'username'])
                ];
            }
        },
    },
    actions: {

    },
    getters: {
        getErrorForField: (state) => (fieldName) => {
            const error = state.errors.find((error) => error.fieldName === fieldName);

            if (!error) {
                return;
            }

            return error.message;
        },
        hasErrorForField: (state) => (fieldName) => {
            return state.errors.some((error) => error.fieldName === fieldName);
        },
        hasErrors: (state) => {
            return state.errors.length > 0;
        },
		nextPage: (state) => {
            const pages = ['intro', 'details', 'confirmation', 'profile'];

            const currentPageIndex = pages.findIndex(page => page === state.currentPage);

            if (currentPageIndex === -1
                || currentPageIndex === pages.length - 1
            ) {
                return null;
            }

            return pages[currentPageIndex + 1];
		},
    }
});

const compileErrors = (data, fieldNames) => {
    return fieldNames.reduce((errors, fieldName) => {
        if (!data[fieldName]) {
            return [
                ...errors,
                {
                    fieldName: fieldName,
                    message: 'This first is required.',
                }
            ]
        }

        return errors;
    }, []);
}
