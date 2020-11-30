import { createStore } from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import products from './products/index'
import reviews from './reviews/index'
import cart from './cart/index'

export default createStore({
  state: {
    loading: false,
    error: null,
    categories: [],
    featuredProducts: [],
    cartId: null
  },
  mutations,
  actions,
  getters,
  modules: {
    products,
    reviews,
    cart
  }
})
