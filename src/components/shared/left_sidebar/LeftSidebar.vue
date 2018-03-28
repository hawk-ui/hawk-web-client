<template>
    <div id="sidebar-wrapper" class="menu-side">
      <app-top-navbar></app-top-navbar>
      <ul class="sidebar-nav">
          <li>
            <router-link to="/monitoring">
              <i class="material-icons md-18 leftnav_icon">desktop_mac</i>
              <span>{{ $t("leftnav_bar.links.monitoring") }}</span>
            </router-link>
          </li>
          <li>
            <router-link to="/troubleshooting/reports">
              <i class="material-icons md-18 leftnav_icon">tune</i>
              <span>{{ $t("leftnav_bar.links.trubleshooting") }}</span>
            </router-link>
          </li>
          <li>
            <router-link to="/configuration">
              <i class="material-icons md-18 leftnav_icon">settings</i>
              <span>{{ $t("leftnav_bar.links.configuration") }}</span>
            </router-link>
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
</style>
