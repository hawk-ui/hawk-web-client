<template>
    <div id="sidebar-wrapper" class="sidebar-toggle">
      <app-top-navbar></app-top-navbar>
      <ul class="sidebar-nav">
          <li>
              <a href="#item1">Monitoring</a>
          </li>
          <li>
              <a href="#item2">Trubleshooting</a>
          </li>
          <li>
              <a href="#item3">Cluster Counfiguration</a>
          </li>
          <li>
              <a href="#item1">Add a resource</a>
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
    'app-footer': Footer,
    'app-top-navbar': TopNavbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/css/left-navbar.scss';
</style>
