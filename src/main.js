// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import Icon from 'vue-awesome/components/Icon'
import resource from 'vue-resource'
import i18n from './i18n'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'vue-awesome/icons'
Vue.component('icon', Icon)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

Vue.use(resource)
Vue.http.options['emulateJSON'] = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  i18n
})
