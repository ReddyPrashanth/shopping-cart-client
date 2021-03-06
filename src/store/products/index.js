import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default {
    namespaced: true,
    state: {
        products: [],
        current_page: 1,
        last_page: null,
        per_page: 16,
        next: null,
        prev: null,
        total: 0,
        product: null
    },
    mutations,
    actions,
    getters
}