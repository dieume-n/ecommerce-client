export const state = () => ({
    products: [],
    count: 0,
    empty: true,
    subTotal: null,
    total: null,
    changed: false
})

export const getters = {
    products(state) {
        return state.products
    },
    count(state) {
        return state.products.length
    },
    empty(state) {
        return state.empty
    },
    subTotal(state) {
        return state.subTotal
    },
    total(state) {
        return state.total
    },
    changed(state) {
        return state.changed
    },

}

export const mutations = {
    SET_PRODUCTS(state, products) {
        state.products = products
    },
    SET_EMPTY(state, empty) {
        state.empty = empty
    },
    SET_SUBTOTAL(state, subTotal) {
        state.subTotal = subTotal
    },
    SET_TOTAL(state, total) {
        state.total = total
    },

    SET_CHANGED(state, changed) {
        state.changed = changed
    }
}

export const actions = {
    async getCart({ commit }) {
        let response = await this.$axios.$get('cart')

        commit('SET_PRODUCTS', response.data.products)
        commit('SET_EMPTY', response.meta.empty)
        commit('SET_SUBTOTAL', response.meta.subTotal)
        commit('SET_TOTAL', response.meta.total)
        commit('SET_CHANGED', response.meta.changed)

        return response
    },
    async deleteProduct({ dispatch }, productId) {
        let response = await this.$axios.$delete(`cart/${productId}`)

        dispatch('getCart')
    },

    async updateProduct({ dispatch }, { productId, quantity }) {
        let response = await this.$axios.$patch(`cart/${productId}`, {
            quantity
        })

        dispatch('getCart')
    }
}

