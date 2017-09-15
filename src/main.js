// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import Resource from 'vue-resource'
import i18n from './i18n'
import VueMaterial from 'vue-material'
import jQuery from 'jquery'
global.jQuery = jQuery
let Bootstrap = require('bootstrap')
import 'material-design-icons-iconfont/dist/material-design-icons.css'
// import 'roboto-fontface-woff/css/roboto/roboto-fontface.css'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueMaterial)
Vue.use(Bootstrap)
Vue.config.productionTip = false

Vue.use(Resource)
Vue.http.options['emulateJSON'] = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  i18n
})
