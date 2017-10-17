import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'

// Main structure
import LeftSidebar from '@/components/shared/LeftSidebar'
import PageHeader from '@/components/shared/PageHeader'

// Main sections
import Monitoring from '@/components/monitoring/Monitoring'
import Troubleshooting from '@/components/troubleshooting/Troubleshooting'
import Configuration from '@/components/clusterConfiguration/Cluster-configuration'

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
        'page-header': PageHeader,
        'left-sidebar': LeftSidebar
      }
    },
    {
      path: '/monitoring',
      components: {
        default: Monitoring,
        'page-header': PageHeader,
        'left-sidebar': LeftSidebar
      }
    },
    {
      path: '/troubleshooting',
      components: {
        default: Troubleshooting,
        'page-header': PageHeader,
        'left-sidebar': LeftSidebar
      }
    },
    {
      path: '/configuration',
      components: {
        default: Configuration,
        'page-header': PageHeader,
        'left-sidebar': LeftSidebar
      }
    }
  ]
})
