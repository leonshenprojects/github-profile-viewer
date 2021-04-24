import Vue from 'vue'
import Vuex from 'vuex'
import Api from './utils/Api.js';

Vue.use(Vuex)

const pages = ['intro', 'details', 'confirmation', 'profile'];

export default new Vuex.Store({
    state: {
        currentPage: 'intro',
        data: {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            agreeWithTerms: false,
        },
        errors: [],
        previousPage: null,
        profile: null,
    },
    mutations: {
        clearError(state, fieldName) {
            state.errors = state.errors.filter(error => error.fieldName !== fieldName);
        },
        clearErrors(state) {
            state.errors = [];
        },
        clearProfile(state) {
            state.profile = null;
        },
		setCurrentPage(state, step) {
			state.currentPage = step;
		},
		setPreviousPage(state, step) {
			state.previousPage = step;
		},
        setProfile(state, profile) {
            if (profile.login !== state.data.username) {
                return;
            }

            state.profile = profile;
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
		fetchProfile: async ({ commit, state }) => {
            commit('clearProfile');

            try {
                const response = await Api.get(`https://api.github.com/users/${state.data.username}`);
                commit('setProfile', response);

                if (state.profile) {
                    return true;
                }

                return false;
            } catch (e) {
                console.log('Something has gone wrong. Please try again later.', e);
                return false;
            }
		},
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
        hasNoData: (state) => {
            return Object.values(state.data).every((value) => !value);
        },
		nextPage: (state) => {
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
