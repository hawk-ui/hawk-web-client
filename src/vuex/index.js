import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  api: 'http://localhost:3004/db'
}

const store = new Vuex.Store({
  state,
  getters: {

  }
})

export default store
