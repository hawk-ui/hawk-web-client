import Vue from 'vue'
import VueRouter from 'vue-router'

// Login page
import Login from '@/components/Login'

// Main sections
import Monitoring from '@/components/monitoring/Cluster'
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
      path: '/nodeStatus',
      component: NodeStatus
    },
    {
      path: '/resourceStatus',
      component: ResourceStatus
    }
  ]
})
