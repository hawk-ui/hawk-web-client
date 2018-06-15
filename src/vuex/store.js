import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import Service from '../service/app_service.js'

const state = {
  cib: {},
  userName: '',
  apiToken: '',
  loggedInStatus: true
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
    },
    login (context, userInput) {
      Service.login('/register', userInput).then((data) => context.commit('addApiToken', data))
    }
  },
  mutations: {
    updateCib (state, data) {
      state.cib = data
    },
    addApiToken (state, token) {
      state.user.apiToken = token
    },
    removeApiToken (state) {
      state.user.apiToken = ''
    }
  }
})

export default store
