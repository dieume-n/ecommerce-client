export const state = () => ({
    categories: []
});

export const getters = {
    categories(state) {
        return state.categories
    }
}

export const mutations = {
    SET_CATEGORIES(state, categories) {
        state.categories = categories
    }
}

export const actions = {
    async nuxtServerInit({ commit }, { $axios }) {
        let response = await $axios.$get('categories');
        // console.log('data', response.data);
        commit('SET_CATEGORIES', response.data);
        // const response = await $axios.$get('/categories');
    }

}