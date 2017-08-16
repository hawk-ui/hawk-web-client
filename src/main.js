// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import Resource from 'vue-resource'
import i18n from './i18n'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueMaterial)
Vue.use(BootstrapVue)
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
