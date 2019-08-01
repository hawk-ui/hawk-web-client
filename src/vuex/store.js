import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import Service from '../service/app_service.js'

const state = {
  cib: {
    cluster_property: [],
    nodes_status: []
  },
  nodesSections: [
    { label: 'Online', value: 0, color: '#00C081' },
    { label: 'Warning', value: 0, color: '#FFC107' },
    { label: 'Critical', value: 0, color: '#DC3545' }
  ],
  resourceSections: [
    { label: 'Online', value: 0, color: '#00C081' },
    { label: 'Warning', value: 0, color: '#FFC107' },
    { label: 'Critical', value: 0, color: '#DC3545' }
  ],
  totalNodes: 1,
  totalResource: 1,
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
    nodesSections: (state) => {
      return state.nodesSections
    },
    totalNodes: (state) => {
      return state.totalNodes
    },
    resourceSections: (state) => {
      return state.resourceSections
    },
    totalResource: (state) => {
      return state.totalResource
    }
  },
  actions: {
    updateCib (context) {
      Service.getCib('/db', state.user.apiToken).then((data) => {
        context.commit('updateCib', data)
        context.commit('updateSections', data)
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
      console.log(data)
    },
    updateSections (state, data) {
      // Update nodes_status
      for (var i = 0; i < data.nodes_status.length; i++) {
        if (data.nodes_status[i].oneline === 'true') {
          state.nodesSections[0].value += 1
        } if (data.nodes_status[i].pending === 'true') {
          state.nodesSections[1].value += 1
        } if (data.nodes_status[i].shutdown === 'true') {
          state.nodesSections[2].value += 1
        }
      }
      state.totalNodes = data.nodes_status.length
      // Update resources_status
      for (var r = 0; r < data.resources_status.length; r++) {
        if (data.resources_status[r].active === 'true') {
          state.resourceSections[0].value += 1
        } if (data.resources_status[r].blocked === 'true') {
          state.resourceSections[1].value += 1
        } if (data.resources_status[r].failed === 'true') {
          state.resourceSections[2].value += 1
        }
      }
      state.totalResource = data.resources_status.length
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
