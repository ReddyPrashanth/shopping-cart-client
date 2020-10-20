import { createStore } from 'vuex'
import actions from './actions'
import mutations from './mutations'

export default createStore({
  state: {
    loading: false,
    error: null
  },
  mutations,
  actions,
  modules: {
  }
})
