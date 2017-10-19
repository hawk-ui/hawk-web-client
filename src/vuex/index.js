import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import Service from '../service/service.js'

const state = {
  cib: {}
}

const store = new Vuex.Store({
  state,
  getters: {
    cib: (state) => {
      return state.cib
    }
  },
  actions: {
    updateCib (context) {
      Service.getCib('/db').then((data) => context.commit('updateCib', data))
    }
  },
  mutations: {
    updateCib (state, data) {
      state.cib = data
    }
  }
})

export default store
