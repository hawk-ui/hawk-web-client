<template>
    <div id="sidebar-wrapper">
      <app-top-navbar></app-top-navbar>
      <ul class="sidebar-nav">
          <li>
              <router-link to="/monitoring">{{ $t("leftnav_bar.links.monitoring") }}</router-link>
          </li>
          <li>
              <router-link to="/troubleshooting">{{ $t("leftnav_bar.links.trubleshooting") }}</router-link>
          </li>
          <li>
              <router-link to="/configuration">{{ $t("leftnav_bar.links.configuration") }}</router-link>
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
  @import '../../../assets/css/left-navbar.scss';
</style>
