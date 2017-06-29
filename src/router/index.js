import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Monitoring from '@/components/monitoring/Monitoring'
import Troubleshooting from '@/components/troubleshooting/Troubleshooting'
import ClusterConfiguration from '@/components/clusterConfiguration/Cluster-configuration.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Hello
    },
    {
      path: '/monitoring',
      component: Monitoring
    },
    {
      path: '/troubleshooting',
      component: Troubleshooting
    },
    {
      path: '/clusterConfiguration',
      component: ClusterConfiguration
    }
  ]
})
