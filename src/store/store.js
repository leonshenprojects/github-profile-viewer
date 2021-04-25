import Vue from 'vue'
import Vuex from 'vuex'
import { fetchProfile } from './actions.js';
import {
    getErrorForField,
    hasErrorForField,
    hasErrors,
    hasNoData,
    nextPage,
    previousPage,
} from './getters.js'
import {
    setShowStep,
    addError,
    clearError,
    clearProfile,
    setCurrentPage,
    setProfile,
    updateData,
} from './mutations.js';

Vue.use(Vuex)

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
        setShowStep,
        addError,
        clearError,
        clearProfile,
		setCurrentPage,
        setProfile,
        updateData,
    },
    actions: {
		fetchProfile,
    },
    getters: {
        getErrorForField,
        hasErrorForField,
        hasErrors,
        hasNoData,
		nextPage,
        previousPage,
    }
});

