import { createStore } from 'vuex'
import api from '../hook/api'

const store = createStore({
  state: {
    data: []
  },
  mutations: {
    setData: (state, data) => state.data = data
  },
  actions: {
    init ({ commit }) {
      api.getFullData()
        .then(res => commit('setData', res))
    }
  },
  getters: {
    getLastData (state) {
      return state.data[0]
    }
  }
})

export default store