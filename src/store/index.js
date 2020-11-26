import { createStore } from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import products from './products/index'
import reviews from './reviews/index'

export default createStore({
  state: {
    loading: false,
    error: null,
    categories: [],
    featuredProducts: []
  },
  mutations,
  actions,
  getters,
  modules: {
    products,
    reviews
  }
})
