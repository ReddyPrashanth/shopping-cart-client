import actions from './actions'
import mutations from './mutations'
import getters from './getters'

export default {
    namespaced: true,
    state: {
        reviews: [],
        next: null,
        prev: null,
        current_page: 1
    },
    mutations,
    actions,
    getters
}