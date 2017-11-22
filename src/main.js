// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import router from './router/route.js'
import store from './vuex/store.js'
import i18n from './i18n/local.js'

//  Twitter Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

// Material design icon
import 'material-design-icons-iconfont/dist/material-design-icons.css'

// Load the Main component
import App from './App'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store,
  i18n
})
