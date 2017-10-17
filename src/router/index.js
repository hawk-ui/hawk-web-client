import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'

// Main structure
import TopNavbar from '@/components/TopNavbar'
import LeftSidebar from '@/components/LeftSidebar'
import MainLayout from '@/components/MainLayout'

// Main sections
import Monitoring from '@/components/monitoring/Monitoring'
import Troubleshooting from '@/components/troubleshooting/Troubleshooting'
import Configuration from '@/components/clusterConfiguration/Cluster-configuration.vue'
import Hello from '@/components/Hello'

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
        'top-navbar': TopNavbar,
        'left-sidebar': LeftSidebar,
        'main-layout': MainLayout
      },
      children: [
        {
          path: 'monitoring',
          component: Monitoring
        },
        {
          path: 'troubleshooting',
          component: Troubleshooting
        },
        {
          path: '/configuration',
          component: Configuration
        },
        {
          path: '/addResource',
          component: Hello
        }
      ]
    }
  ]
})
