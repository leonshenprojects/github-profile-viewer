import Vue from 'vue'
import Vuex from 'vuex'
import Api from './utils/Api.js';

Vue.use(Vuex)

const pages = ['/', 'details', 'confirmation', 'profile'];

export default new Vuex.Store({
    state: {
        currentPage: '/',
        data: {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            agreeWithTerms: false,
        },
        errors: [],
        profile: null,
        showStep: false,
    },
    mutations: {
        setShowStep(state, showStep) {
            state.showStep = showStep;
        },
        addError(state, error) {
            state.errors = [
                ...state.errors,
                error,
            ];
        },
        clearError(state, fieldName) {
            state.errors = state.errors.filter(error => error.fieldName !== fieldName);
        },
        clearProfile(state) {
            state.profile = null;
        },
		setCurrentPage(state, step) {
			state.currentPage = step;
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
    },
    actions: {
		fetchProfile: async ({ commit, state }) => {
            commit('clearProfile');

            try {
                const response = await Api.get(`https://api.github.com/users/${state.data.username}`);
                commit('setProfile', response);

                return true;
            } catch (e) {
                commit('addError', {
                    fieldName: 'username',
                    message: 'No match found for this username.',
                });

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
        previousPage: (state) => {
            const currentPageIndex = pages.findIndex(page => page === state.currentPage);

            if (currentPageIndex < 1) {
                return null;
            }

            return pages[currentPageIndex - 1];
        },
    }
});

