import getters from './getters';
import actions from './actions';
import mutations from './mutations';

export default {
    namespaced: true,
    state: {
        items:[],
        savedItems: [],
        freeShipping: 100
    },
    getters,
    actions,
    mutations
}