import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import Service from '../service/app_service.js'

const state = {
  cib: {
    cluster_property: [],
    nodes_status: []
  },
  sections: [
    { label: 'Red section', value: 35, color: 'red' },
    { label: 'Green section', value: 40, color: 'green' },
    { label: 'Blue section', value: 25, color: 'blue' }
  ],
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
    },
    sections: (state) => {
      return state.sections
    }
  },
  actions: {
    updateCib (context) {
      Service.getCib('/db', state.user.apiToken).then((data) => {
        context.commit('updateCib', data)
      })
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
    updateSections (state, data) {
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
