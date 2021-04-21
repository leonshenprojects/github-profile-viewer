import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentPage: 'intro',
    },
    mutations: {
		setcurrentPage(state, step) {
			state.currentPage = step;
		},
    },
    actions: {

    },
    getters: {
        currentPage: state => state.currentPage,
		nextPage: state => {
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
