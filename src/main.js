// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import Resource from 'vue-resource'
import i18n from './i18n'
import VueMaterial from 'vue-material'

//  Twitter Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(VueMaterial)
Vue.use(Resource)

/* eslint-disable no-unused-vars */
var app = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  i18n
})
