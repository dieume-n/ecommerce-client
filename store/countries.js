export const state = () => ({
    countries: [],
})

export const getters = {
    countries(state) {
        return state.countries
    }
}

export const mutations = {
    SET_COUNTRIES(state, countries) {
        state.countries = countries
    }
}

export const actions = {
    async getCountries({ commit }) {
        let response = await this.$axios.$get('countries')

        commit('SET_COUNTRIES', response.data)
        return response
    },
}
