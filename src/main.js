// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import router from './router'
import Resource from 'vue-resource'
import i18n from './i18n'
import VueMaterial from 'vue-material'

//  Twitter Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

// Material design icon
import 'material-design-icons-iconfont/dist/material-design-icons.css'

// Load the Main component
import App from './App'

Vue.use(VueMaterial)
Vue.use(Resource)

var vm = new Vue({
  el: '#app',
  data: {
    api: 'http://localhost:3004/db',
    cib: {}
  },
  mounted: function () {
    fetch(this.api)
      .then(stream => stream.json())
      .then(data => { this.cib = data })
  },
  template: '<App/>',
  components: { App },
  router,
  i18n
})

// For debugging
global.vm = vm
