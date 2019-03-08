<template>
  <div class="sidebar-view">
    <app-left-sidebar></app-left-sidebar>
    <div id="page-content-wrapper">
      <app-simulator></app-simulator>
      <div class="page-content page-content-right">
        <app-page-header></app-page-header>
          <router-view></router-view>
        <footer class="footer-content display-collapsed">
          <ul class="footer-list">
            <li class="footer-list-item">© SUSE 2017</li>
            <li class="footer-list-item">
              <a class="footer-link" href="#">Help</a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
  import LeftSidebar from './shared/left_sidebar/LeftSidebar.vue'
  import PageHeader from './shared/PageHeader.vue'
  import Simulator from './shared/Simulator.vue'

export default {
    components: {
      'app-left-sidebar': LeftSidebar,
      'app-page-header': PageHeader,
      'app-simulator': Simulator
    }
}

</script>

<style lang="scss">
</style>
