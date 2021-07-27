import { createStore } from 'vuex'
import api from '../hook/api'

const store = createStore({
  state: {
  },
  mutations: {
  },
  actions: {
    init () {
      api.getFullData()
    }
  }
})

export default store