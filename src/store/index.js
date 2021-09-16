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

    lineChartData (state) {
      return state.data.filter(item => {
        return time.filter(item.a04)
      }).reverse().map(item => {
        return {
          x: time.formatter(item.a04),
          y: parseInt(item.a06)
        }
      })
    }
  }
})

export default store