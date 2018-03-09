import Vue from 'vue'
import VueRouter from 'vue-router'

// Login page
import Login from '@/components/Login'

// Main structure (once logged in)
import LeftSidebar from '@/components/shared/left_sidebar/LeftSidebar'
import TopNavbar from '@/components/shared/top_navbar/TopNavbar'

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
      components: {
        default: Monitoring,
        'top-navbar': TopNavbar,
        'left-sidebar': LeftSidebar
      }
    },
    {
      path: '/monitoring',
      components: {
        default: Monitoring,
        'top-navbar': TopNavbar,
        'left-sidebar': LeftSidebar
      }
    },
    {
      path: '/troubleshooting',
      components: {
        default: Troubleshooting,
        'top-navbar': TopNavbar,
        'left-sidebar': LeftSidebar
      }
    },
    {
      path: '/configuration',
      components: {
        default: Configuration,
        'top-navbar': TopNavbar,
        'left-sidebar': LeftSidebar
      }
    },
    {
      path: '/nodeStatus',
      components: {
        default: NodeStatus,
        'top-navbar': TopNavbar,
        'left-sidebar': LeftSidebar
      }
    },
    {
      path: '/resourceStatus',
      components: {
        default: ResourceStatus,
        'top-navbar': TopNavbar,
        'left-sidebar': LeftSidebar
      }
    }
  ]
})
