import Vue from 'vue'
import VueRouter from 'vue-router'

// Login page
import Login from '@/components/Login'

// Main sections
import Monitoring from '@/components/monitoring/Monitoring'
import Troubleshooting from '@/components/troubleshooting/Troubleshooting'
import Configuration from '@/components/configuration/Configuration'
import NodeStatus from '@/components/node/NodeStatus'
import ResourceStatus from '@/components/resources/resourceStatus'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: Monitoring
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
      path: '/configuration',
      component: Configuration
    },
    {
      path: '/nodeStatus',
      component: NodeStatus
    },
    {
      path: '/resourceStatus',
      component: ResourceStatus
    }
  ]
})
