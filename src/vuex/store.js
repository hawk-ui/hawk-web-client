import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import Service from '../service/app_service.js'

const state = {
  cib: {},
  user: {
    userName: '',
    apiToken: '',
    loggedInStatus: true
  }
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
      Service.getCib('/status', state.user.apiToken).then((data) => context.commit('updateCib', data)) // points to '/status' to test changes
    },
    login (context, userInput) {
      Service.login('/register', userInput).then((data) => context.commit('addApiToken', data))
    },
    logout (context) {
      context.commit('deleteApiToken')
    }
  },
  mutations: {
    updateCib (state, data) {
      state.cib = data
    },
    addApiToken (state, data) {
      state.user.apiToken = data // Now you can fetch the token by using: this.$store.state.user.apiToken
    },
    deleteApiToken (state) {
      state.user.apiToken = ''
    }
  }
})

export default store
