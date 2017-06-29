<template>
    <div id="sidebar-wrapper" class="sidebar-toggle">
      <app-top-navbar></app-top-navbar>
      <ul class="sidebar-nav">
          <li>
              <router-link to="/monitoring">Monitoring</router-link>
          </li>
          <li>
              <router-link to="/troubleshooting">Trubleshooting</router-link>
          </li>
          <li>
              <router-link to="/clusterConfiguration">Cluster Configuration</router-link>
          </li>
          <li>
              <router-link to="/">Add a resource</router-link>
          </li>
        </ul>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Footer from './Footer.vue'
import TopNavbar from './TopNavbar.vue'

export default {
  components: {
    'appFooter': Footer,
    'appTopNavbar': TopNavbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/css/left-navbar.scss';
</style>
