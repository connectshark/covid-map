import { createStore } from 'vuex'
import api from '../hook/api'
import time from '../lib/time'

const store = createStore({
  state: {
    data: [],
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
    },
    getChartLabel (state) {
      return state.data.map(item => item.a04).reverse()
    },
    getChartData (state) {
      return state.data.map(item => {
        return [time.formatter(item.a04), parseInt(item.a06)]
      }).reverse()
    },
    getFullAmount (state) {
      return state.data.map(item => parseInt(item.a05)).reverse()
    }
  }
})

export default store